const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/contact-data.json");

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf8");
  }
}

function readContacts() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function writeContacts(contacts) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf8");
}

module.exports = {
  readContacts,
  writeContacts,
};
