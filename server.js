const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // to handle JSON data

// 👉 Test route (GET)
app.get("/", (req, res) => {
  res.send("✅ ESP Backend is running!");
});

// 👉 ESP8266 sends data (POST)
app.post("/esp", (req, res) => {
  console.log("📡 Data received from ESP:", req.body);

  res.json({ status: "ok", received: req.body });
});

// 👉 ESP8266 can request data (GET)
app.get("/data", (req, res) => {
  res.json({
    message: "Hello ESP8266 from server!",
    value: 123
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
