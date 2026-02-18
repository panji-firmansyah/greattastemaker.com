import { z } from "zod";

export const startFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email"),
  whatsapp: z.string().min(8, "Please enter a valid WhatsApp number"),
  challenge: z.string().min(10, "Tell us a bit more about your challenge"),
});

export type StartFormValues = z.infer<typeof startFormSchema>;
