"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  location: z.string().optional(),
  package: z.string().optional(),
  message: z.string().min(10, "Please write a brief message"),
  botcheck: z.string().max(0, ""),
});

type FormData = z.infer<typeof schema>;

const packageOptionMap: Record<string, string> = {
  basic:          "Media: Basic (75 BD)",
  standard:       "Media: Standard (120 BD)",
  premium:        "Media: Premium Luxury (220 BD)",
  "dev-starter":  "Dev: Starter (250 BD)",
  "dev-business": "Dev: Business (400 BD)",
  "dev-premium":  "Dev: Premium (650 BD)",
  "care-plan":    "Dev: Care Plan (30 BD/mo)",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const pkg = searchParams.get("package");
    if (!pkg) return;
    const match = packageOptionMap[pkg.toLowerCase()];
    if (match) setValue("package", match);
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: "PanoPros Website",
          subject: `New inquiry from ${data.name}`,
          name: data.name,
          email: data.email,
          phone: data.phone ?? "",
          location: data.location ?? "",
          package: data.package ?? "",
          message: data.message,
          botcheck: data.botcheck,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-2xl font-heading font-semibold text-ink mb-2">
          Message received!
        </p>
        <p className="text-charcoal">
          Thanks — we&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="checkbox"
        {...register("botcheck")}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name *" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone" error={undefined}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+973 XXXX XXXX"
            className={inputCls(false)}
          />
        </Field>
        <Field label="Property Location" error={undefined}>
          <input
            {...register("location")}
            type="text"
            placeholder="e.g. Riffa, Amwaj"
            className={inputCls(false)}
          />
        </Field>
      </div>

      <Field label="Service Interest" error={undefined}>
        <select {...register("package")} className={inputCls(false)}>
          <option value="">Select a service…</option>
          <optgroup label="Real Estate Media">
            <option value="Media: Basic (75 BD)">Basic — 75 BD</option>
            <option value="Media: Standard (120 BD)">Standard — 120 BD</option>
            <option value="Media: Premium Luxury (220 BD)">Premium Luxury — 220 BD</option>
          </optgroup>
          <optgroup label="Web & App Development">
            <option value="Dev: Starter (250 BD)">Starter — 250 BD</option>
            <option value="Dev: Business (400 BD)">Business — 400 BD</option>
            <option value="Dev: Premium (650 BD)">Premium — 650 BD</option>
            <option value="Dev: Care Plan (30 BD/mo)">Care Plan — 30 BD/mo</option>
          </optgroup>
          <optgroup label="Other">
            <option value="Not sure">Not sure — help me decide</option>
            <option value="Other">Other</option>
          </optgroup>
        </select>
      </Field>

      <Field label="Message *" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your property, your business, or what you need…"
          className={`${inputCls(!!errors.message)} resize-none`}
        />
      </Field>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try emailing{" "}
          <a href="mailto:info@panopros.bh" className="underline">
            info@panopros.bh
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-ink text-bone font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-charcoal transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return `w-full bg-white border ${
    hasError ? "border-red-400" : "border-cream"
  } rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
