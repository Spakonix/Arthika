require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1);
});

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
  email: String,
  password: String,
  language: String,
});

const User = mongoose.model('User', userSchema);

// Register
app.post('/api/users/register', async (req, res) => {
  const { name, phone } = req.body;

  try {
    const existingUser = await User.findOne({ name, phone });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }

    await new User(req.body).save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// Login
app.post('/api/users/login', async (req, res) => {
  const { name, phone } = req.body;

  try {
    const user = await User.findOne({ name, phone });
    if (user) res.json({ success: true, user });
    else res.json({ success: false, message: 'User not found' });
  } catch {
    res.status(500).json({ success: false });
  }
});

// React build
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
