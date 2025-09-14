// server.js — basic Express server
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// simple admin route for now
app.get("/admin", (req, res) => {
  res.send("<h1>Admin panel is running!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
