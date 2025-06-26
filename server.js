const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Load car data
const carsFile = path.join(__dirname, 'cars.json');
function getCars() {
  return JSON.parse(fs.readFileSync(carsFile, 'utf-8'));
}

// GET /api/cars
app.get('/api/cars', (req, res) => {
  res.json(getCars());
});

// POST /api/test-drive
app.post('/api/test-drive', (req, res) => {
  const data = req.body;
  const file = path.join(__dirname, 'test_drives.json');
  let arr = [];
  if (fs.existsSync(file)) arr = JSON.parse(fs.readFileSync(file, 'utf-8'));
  arr.push({ ...data, date: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(arr, null, 2));
  res.json({ success: true, message: 'Test drive booked!' });
});

// POST /api/feedback
app.post('/api/feedback', (req, res) => {
  const data = req.body;
  const file = path.join(__dirname, 'feedback.json');
  let arr = [];
  if (fs.existsSync(file)) arr = JSON.parse(fs.readFileSync(file, 'utf-8'));
  arr.push({ ...data, date: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(arr, null, 2));
  res.json({ success: true, message: 'Feedback received!' });
});

// POST /api/admin/login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  // Demo: hardcoded admin
  if (username === 'admin' && password === 'password123') {
    res.json({ success: true, token: 'demo-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 