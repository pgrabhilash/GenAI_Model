const express = require('express');
require('dotenv').config();
const genaiRouter = require('./routes/index');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Hello, Abhilash!");
})


// routes;

app.use('/api/v1/ai', genaiRouter);
// http://localhost:5000/api/v1/ai/generate
  
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
