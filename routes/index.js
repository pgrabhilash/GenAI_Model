const express = require('express');
const { genai } = require('../controller/genAi');

const router = express.Router();

router.post('/generate', genai);

module.exports = router;