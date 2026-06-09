"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please write a brief message"),
  botcheck: z.string().max(0, ""),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log("ContactForm onSubmit called", data); // TODO: remove debug log
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
      <div className="text-center py-12">
        <p className="text-2xl font-medium text-ink mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Message received.
        </p>
        <p className="text-sm text-ink/60">
          We&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Honeypot */}
      <input type="hidden" {...register("botcheck")} value="" />

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

      <Field label="Phone" error={undefined}>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+973 XXXX XXXX"
          className={inputCls(false)}
        />
      </Field>

      <Field label="Message *" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your project…"
          className={`${inputCls(!!errors.message)} resize-none`}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
              handleSubmit(onSubmit)();
            }
          }}
        />
      </Field>

      {status === "error" && (
        <p className="text-red-500 text-sm">
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
        className="w-full sm:w-auto bg-ink text-bone text-sm font-medium px-8 py-3 rounded-full hover:bg-charcoal transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return `w-full bg-transparent border-b ${
    hasError ? "border-red-400" : "border-ink/20"
  } px-0 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors`;
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
      <label className="block text-xs font-medium text-muted uppercase tracking-widest mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
