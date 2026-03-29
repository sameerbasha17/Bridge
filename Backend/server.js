const express = require("express");
const app = express();

app.use(express.json()); // allows reading JSON from frontend

// Dummy user (simulating database for now)
const user = {
  username: "admin",
  password: "1234"
};

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    // success → normally we send a token
    res.json({
      message: "Login successful",
      token: "dummy-token-123"
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials"
    });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});