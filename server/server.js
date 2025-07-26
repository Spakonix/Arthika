const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://teamspakonix:JHvC1YBqKRN6P5eW@spakonix.fyrfmvg.mongodb.net/userDataDB?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit on DB connection error
  });

// Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
  email: String,
  password: String,
  language: String,
});

const User = mongoose.model('User', userSchema);

// Register API Route
app.post('/api/users/register', async (req, res) => {
  const { name, phone } = req.body;

  try {
    const existingUser = await User.findOne({ name, phone });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Login API Route
app.post('/api/users/login', async (req, res) => {
  const { name, phone } = req.body;

  try {
    const user = await User.findOne({ name, phone });
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Serve static files from React
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
