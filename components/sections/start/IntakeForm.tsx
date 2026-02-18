"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { startFormSchema, type StartFormValues } from "@/lib/schemas";
import { submitStartForm } from "@/lib/actions";
import { startContent } from "@/lib/content";
import { ThankYouState } from "./ThankYouState";

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StartFormValues>({
    resolver: zodResolver(startFormSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: StartFormValues) {
    setSubmitError(null);
    const result = await submitStartForm(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error || "Something went wrong. Please try again.");
    }
  }

  if (submitted) {
    return <ThankYouState />;
  }

  return (
    <div className="max-w-content-form mx-auto">
      <div className="rounded-lg border border-border-light bg-bg-primary p-6 lg:p-10">
        <h2 className="font-sans font-semibold text-lg text-text-primary mb-6">
          {startContent.formHeader}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[var(--space-md)]">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-sans text-[var(--text-body-sm)] font-medium text-text-primary mb-1.5"
            >
              Your name
            </label>
            <Input
              id="name"
              {...register("name")}
              className={errors.name ? "border-[var(--error)]" : ""}
            />
            {errors.name && (
              <p className="mt-1.5 font-sans text-[var(--text-caption)] text-[var(--error)]">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block font-sans text-[var(--text-body-sm)] font-medium text-text-primary mb-1.5"
            >
              Company / brand name
            </label>
            <Input
              id="company"
              {...register("company")}
              className={errors.company ? "border-[var(--error)]" : ""}
            />
            {errors.company && (
              <p className="mt-1.5 font-sans text-[var(--text-caption)] text-[var(--error)]">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-sans text-[var(--text-body-sm)] font-medium text-text-primary mb-1.5"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-[var(--error)]" : ""}
            />
            {errors.email && (
              <p className="mt-1.5 font-sans text-[var(--text-caption)] text-[var(--error)]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <div>
            <label
              htmlFor="whatsapp"
              className="block font-sans text-[var(--text-body-sm)] font-medium text-text-primary mb-1.5"
            >
              WhatsApp number
            </label>
            <Input
              id="whatsapp"
              type="tel"
              {...register("whatsapp")}
              className={errors.whatsapp ? "border-[var(--error)]" : ""}
            />
            <p className="mt-1 font-sans text-[var(--text-caption)] text-text-tertiary">
              Primary contact channel
            </p>
            {errors.whatsapp && (
              <p className="mt-1 font-sans text-[var(--text-caption)] text-[var(--error)]">
                {errors.whatsapp.message}
              </p>
            )}
          </div>

          {/* Challenge */}
          <div>
            <label
              htmlFor="challenge"
              className="block font-sans text-[var(--text-body-sm)] font-medium text-text-primary mb-1.5"
            >
              What&apos;s your biggest go-to-market challenge right now?
            </label>
            <Textarea
              id="challenge"
              {...register("challenge")}
              className={errors.challenge ? "border-[var(--error)]" : ""}
            />
            <p className="mt-1 font-sans text-[var(--text-caption)] text-text-tertiary">
              2-3 sentences is perfect
            </p>
            {errors.challenge && (
              <p className="mt-1 font-sans text-[var(--text-caption)] text-[var(--error)]">
                {errors.challenge.message}
              </p>
            )}
          </div>

          {/* Submit error */}
          {submitError && (
            <p className="font-sans text-[var(--text-body-sm)] text-[var(--error)]">
              {submitError}
            </p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            size="full"
            className="sm:w-auto sm:px-8"
          >
            {isSubmitting ? "Submitting..." : "Submit →"}
          </Button>
        </form>
      </div>
    </div>
  );
}
