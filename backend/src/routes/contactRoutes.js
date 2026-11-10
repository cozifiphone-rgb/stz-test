const express = require("express");
const {
  createContact,
  getContacts,
} = require("../controllers/contactController");
const { validateContact } = require("../middleware/validateContact");

const router = express.Router();

router.post("/", validateContact, createContact);
router.get("/", getContacts);

module.exports = router;
