require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Initialize Gemini API with the key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
console.log(apiKey);

if (!apiKey) {
  throw new Error("GEMINI_API_KEY not found in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Route to handle Gemini API request
app.post("/predict", async (req, res) => {
  const userInput = req.body.input;
  if (!userInput) {
    return res.status(400).json({ error: "Input cannot be empty" });
  }

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ],
    });

    const result = await chatSession.sendMessage(userInput);

    // Check if there's a response
    if (result && result.response && result.response.text) {
      res.json({ result: result.response.text() });
    } else {
      res.status(500).json({ error: "No response from the API" });
    }
  } catch (err) {
    console.error("Error fetching prediction:", err.message || err);
    res.status(500).json({ error: "Failed to get prediction" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
