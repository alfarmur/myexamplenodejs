const express = require("express");
const app = express();

const PORT = 3000;

// Serve static frontend files
app.use(express.static("public"));

// Health check (useful for Kubernetes)
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Frontend app running on port ${PORT}`);
});
