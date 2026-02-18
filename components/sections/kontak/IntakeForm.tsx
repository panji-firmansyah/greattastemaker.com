"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/common/GlassCard";
import { SuccessState } from "./SuccessState";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { SERVICE_OPTIONS } from "@/lib/constants";

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Gagal mengirim");

      setSubmittedData(data);
      setSubmitted(true);
    } catch {
      alert("Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.");
    }
  }

  if (submitted && submittedData) {
    return (
      <SuccessState
        name={submittedData.name}
        company={submittedData.company}
        service={submittedData.service}
      />
    );
  }

  return (
    <GlassCard hover={false} className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Nama */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Nama Lengkap <span className="text-cyan-400">*</span>
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            className="border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Perusahaan */}
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Perusahaan <span className="text-cyan-400">*</span>
          </label>
          <Input
            id="company"
            placeholder="PT Contoh Indonesia"
            className="border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
            {...register("company")}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>

        {/* Email & WhatsApp */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Email <span className="text-cyan-400">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="email@perusahaan.com"
              className="border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Nomor WhatsApp <span className="text-cyan-400">*</span>
            </label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="08123456789"
              className="border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
              {...register("whatsapp")}
            />
            {errors.whatsapp && (
              <p className="mt-1 text-xs text-red-400">{errors.whatsapp.message}</p>
            )}
          </div>
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Website Perusahaan
          </label>
          <Input
            id="website"
            type="url"
            placeholder="https://perusahaan.com"
            className="border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
            {...register("website")}
          />
          {errors.website && (
            <p className="mt-1 text-xs text-red-400">{errors.website.message}</p>
          )}
        </div>

        {/* Service selection */}
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Apa yang Anda cari? <span className="text-cyan-400">*</span>
          </label>
          <select
            id="service"
            className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:ring-offset-2 focus:ring-offset-zinc-950"
            {...register("service")}
            defaultValue=""
          >
            <option value="" disabled className="text-zinc-600">
              Pilih layanan...
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option} className="bg-zinc-900">
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Ceritakan sedikit tentang produk/layanan Anda
          </label>
          <Textarea
            id="message"
            placeholder="Opsional, maksimal 500 karakter"
            rows={4}
            className="border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Mengirim...
            </>
          ) : (
            "Kirim"
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
