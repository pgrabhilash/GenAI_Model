const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const genai = async(req, res) => {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(200).send(text);
}

module.exports = {
    genai
}