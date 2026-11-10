"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { LoaderCircle, CheckCircle2 } from "lucide-react";
import {
  submitContactForm,
  validateContactForm,
  type ContactFormPayload,
} from "@/utils/api";
import { cn } from "@/utils/cn";

const INITIAL: ContactFormPayload = {
  fullName: "",
  email: "",
  phone: "",
  title: "",
  description: "",
};

type ContactFormProps = {
  defaultTitle?: string;
};

export function ContactForm({ defaultTitle = "" }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormPayload>({
    ...INITIAL,
    title: defaultTitle,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormPayload, string>>
  >({});
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (defaultTitle) {
      setValues((current) => ({ ...current, title: defaultTitle }));
    }
  }, [defaultTitle]);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(false);
    setServerErrors([]);

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      await submitContactForm(values);
      setSuccess(true);
      setValues({ ...INITIAL });
      setErrors({});
    } catch (error) {
      const err = error as { message?: string; errors?: string[] };
      setServerErrors(
        err.errors?.length
          ? err.errors
          : [err.message || "Unable to submit your enquiry. Please try again."]
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_16px_50px_rgba(7,17,31,0.06)] sm:p-8"
      aria-describedby={
        success
          ? "form-success"
          : serverErrors.length
            ? "form-server-errors"
            : undefined
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          required
          value={values.fullName}
          error={errors.fullName}
          onChange={(value) => setValues((v) => ({ ...v, fullName: value }))}
        />
        <Field
          id="email"
          label="Email Address"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => setValues((v) => ({ ...v, email: value }))}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          required
          value={values.phone}
          error={errors.phone}
          onChange={(value) => setValues((v) => ({ ...v, phone: value }))}
        />
        <Field
          id="title"
          label="Requirement Title"
          required
          value={values.title}
          error={errors.title}
          onChange={(value) => setValues((v) => ({ ...v, title: value }))}
        />
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-ink">
          Project Description <span className="text-teal">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          minLength={20}
          value={values.description}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
          onChange={(e) =>
            setValues((v) => ({ ...v, description: e.target.value }))
          }
          className={cn(
            "w-full rounded-xl border bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20",
            errors.description ? "border-red-400" : "border-ink/10"
          )}
          placeholder="Tell us about your goals, pages, features, and timeline..."
        />
        {errors.description ? (
          <p id="description-error" className="mt-1.5 text-xs text-red-600" role="alert">
            {errors.description}
          </p>
        ) : (
          <p className="mt-1.5 text-xs text-slate-text">
            Minimum 20 characters.
          </p>
        )}
      </div>

      {serverErrors.length > 0 ? (
        <div
          id="form-server-errors"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          <ul className="list-disc space-y-1 pl-4">
            {serverErrors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {success ? (
        <div
          id="form-success"
          className="flex items-start gap-2 rounded-xl border border-teal/25 bg-teal/10 px-4 py-3 text-sm text-teal-deep"
          role="status"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            Thank you! Your enquiry has been submitted successfully. We will get
            back to you soon.
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        aria-busy={loading}
      >
        {loading ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>

      {hasErrors ? (
        <p className="sr-only" role="alert">
          Please fix the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
}: {
  id: keyof ContactFormPayload;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label} {required ? <span className="text-teal">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-xl border bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20",
          error ? "border-red-400" : "border-ink/10"
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
