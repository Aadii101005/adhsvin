const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Test Database Connection
async function connectDB() {
  try {
    await prisma.$connect();
    console.log('✅ Database is connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Basic Route
app.get('/', (req, res) => {
  res.send('ADHSV API is running');
});

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: email === 'admin@adhsv.com' ? 'admin' : 'user'
      }
    });
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
    
    res.status(201).json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
      res.json({
        success: true,
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
        token
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Mock Products Routes
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: 'ADHSV Standard Patch', price: 29.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae', rating: 4.8, category: 'Wound Care' },
      { id: 2, name: 'ADHSV Burn Recovery Matrix', price: 49.99, image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926', rating: 4.9, category: 'Burn Care' },
    ]
  });
});

// User Orders Route
app.get('/api/orders/my', async (req, res) => {
  try {
    // Basic auth check using authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    
    const orders = await prisma.order.findMany({
      where: { userId: decoded.id },
      orderBy: { createdAt: 'desc' }
    });
    
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/request-samples', async (req, res) => {
  const { name, address, contactNumber } = req.body;

  if (!name || !address || !contactNumber) {
    return res.status(400).json({ success: false, message: 'Please provide name, address, and contact number.' });
  }

  try {
    const requestSample = await prisma.requestSample.create({
      data: {
        name,
        address,
        contactNumber,
      },
    });

    res.status(201).json({ success: true, data: requestSample });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
