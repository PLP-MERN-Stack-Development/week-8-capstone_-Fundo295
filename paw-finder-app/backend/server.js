const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const petRoutes = require('./routes/petRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Add this

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (optional)
app.get('/', (req, res) => {
  res.send('🐾 Paw Finder API is running...');
});

// Routes
app.use('/api/pets', petRoutes);
app.use('/api/auth', authRoutes); // ✅ Connect auth routes

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err.message));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
