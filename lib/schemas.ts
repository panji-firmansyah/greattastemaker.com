import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  company: z.string().min(2, "Nama perusahaan minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  whatsapp: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^[0-9+\-\s]+$/, "Nomor WhatsApp tidak valid"),
  website: z.string().url("URL tidak valid").optional().or(z.literal("")),
  service: z.string().min(1, "Pilih layanan yang Anda cari"),
  message: z.string().max(500, "Maksimal 500 karakter").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
