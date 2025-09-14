// backend/routes/admin.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get("/", (req, res) => {
  res.send("<h2>Admin panel is running!</h2><p>Upload form will come later.</p>");
});

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded", info: req.file });
});

module.exports = router;
