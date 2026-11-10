require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: CORS_ORIGIN.split(",").map((origin) => origin.trim()),
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept"],
  })
);

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "STRATEZIC API is running.",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`STRATEZIC backend running on http://localhost:${PORT}`);
});
