import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  location: z.string().optional(),
  package: z.string().optional(),
  message: z.string().min(10),
  _honey: z.string().max(0),
});

const rateLimitMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60 * 1000; // 10 minutes
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + window });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  if (rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const { name, email, phone, location, package: pkg, message } = result.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL || "info@panopros.bh";

  const html = `
    <h2>New inquiry from ${name}</h2>
    <table cellpadding="6">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
      ${location ? `<tr><td><strong>Property Location</strong></td><td>${location}</td></tr>` : ""}
      ${pkg ? `<tr><td><strong>Package</strong></td><td>${pkg}</td></tr>` : ""}
      <tr><td><strong>Message</strong></td><td>${message.replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "PanoPros Website <noreply@panopros.bh>",
    to,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
