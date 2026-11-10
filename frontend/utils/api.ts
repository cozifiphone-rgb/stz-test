import { SITE_CONFIG } from "@/constants/site";

export type ContactFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  title: string;
  description: string;
};

export type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
  count?: number;
};

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ApiResponse> {
  const response = await fetch(`${SITE_CONFIG.apiUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as ApiResponse;

  if (!response.ok) {
    throw {
      status: response.status,
      message: data.message || "Something went wrong.",
      errors: data.errors || [],
    };
  }

  return data;
}

export function validateContactForm(values: ContactFormPayload) {
  const errors: Partial<Record<keyof ContactFormPayload, string>> = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+]?[\d\s()-]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.title.trim()) {
    errors.title = "Requirement title is required.";
  } else if (values.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters.";
  }

  if (!values.description.trim()) {
    errors.description = "Project description is required.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Description must be at least 20 characters.";
  }

  return errors;
}
