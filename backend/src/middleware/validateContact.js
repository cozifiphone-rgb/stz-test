const { validateContactPayload } = require("../utils/validators");

function validateContact(req, res, next) {
  const result = validateContactPayload(req.body || {});

  if (!result.isValid) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: result.errors,
    });
  }

  req.validatedContact = result.data;
  next();
}

module.exports = {
  validateContact,
};
