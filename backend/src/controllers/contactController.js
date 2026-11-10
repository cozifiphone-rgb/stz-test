const { v4: uuidv4 } = require("uuid");
const { readContacts, writeContacts } = require("../utils/fileStorage");

function createContact(req, res, next) {
  try {
    const contacts = readContacts();
    const now = new Date();

    const newContact = {
      id: uuidv4(),
      ...req.validatedContact,
      createdAt: now.toISOString(),
      date: now.toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      time: now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    };

    contacts.push(newContact);
    writeContacts(contacts);

    return res.status(201).json({
      success: true,
      message: "Contact enquiry submitted successfully.",
      data: newContact,
    });
  } catch (error) {
    next(error);
  }
}

function getContacts(req, res, next) {
  try {
    const contacts = readContacts();

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createContact,
  getContacts,
};
