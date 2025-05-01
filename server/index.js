// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/api/shortern', (req, res) =>{
  const { longUrl } = req.body;
  if(!longUrl) { return res.status(400).json({error: 'longUrl is required'})}

  const shortCode = nanoid(6);
  const shortUrl = `{BASEURL}/${shortCode}`;

  // save to db



});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
