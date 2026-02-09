const express = require("express");
const cors = require("cors");
const supportRoutes = require("./routes/supportRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", supportRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

module.exports = app;
