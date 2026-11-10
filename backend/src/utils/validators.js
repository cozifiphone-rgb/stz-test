const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,15}$/;

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateContactPayload(body) {
  const errors = [];

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const description =
    typeof body.description === "string" ? body.description.trim() : "";

  if (!isNonEmptyString(fullName)) {
    errors.push("Full name is required.");
  } else if (fullName.length < 2) {
    errors.push("Full name must be at least 2 characters.");
  } else if (fullName.length > 100) {
    errors.push("Full name must not exceed 100 characters.");
  }

  if (!isNonEmptyString(email)) {
    errors.push("Email is required.");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("Please provide a valid email address.");
  } else if (email.length > 150) {
    errors.push("Email must not exceed 150 characters.");
  }

  if (!isNonEmptyString(phone)) {
    errors.push("Phone number is required.");
  } else if (!PHONE_REGEX.test(phone)) {
    errors.push("Please provide a valid phone number.");
  } else if (phone.replace(/\D/g, "").length < 7) {
    errors.push("Phone number must contain at least 7 digits.");
  }

  if (!isNonEmptyString(title)) {
    errors.push("Requirement title is required.");
  } else if (title.length < 3) {
    errors.push("Requirement title must be at least 3 characters.");
  } else if (title.length > 150) {
    errors.push("Requirement title must not exceed 150 characters.");
  }

  if (!isNonEmptyString(description)) {
    errors.push("Project description is required.");
  } else if (description.length < 20) {
    errors.push("Project description must be at least 20 characters.");
  } else if (description.length > 2000) {
    errors.push("Project description must not exceed 2000 characters.");
  }

  return {
    isValid: errors.length === 0,
    errors,
    data: {
      fullName,
      email,
      phone,
      title,
      description,
    },
  };
}

module.exports = {
  validateContactPayload,
};
