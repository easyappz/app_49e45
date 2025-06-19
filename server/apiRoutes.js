const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// MongoDB connection from global
const mongoDb = global.mongoDb;

// Define schemas for flower categories and reviews
const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  avatar: { type: String, required: true }
});

// Define models
const Category = mongoDb.model('Category', categorySchema);
const Review = mongoDb.model('Review', reviewSchema);

// Seed initial data if collections are empty
async function seedInitialData() {
  const categoryCount = await Category.countDocuments();
  if (categoryCount === 0) {
    const initialCategories = [
      { 
        title: 'Roses', 
        image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 
        description: 'Classic and romantic, perfect for any occasion.' 
      },
      { 
        title: 'Tulips', 
        image: 'https://images.unsplash.com/photo-1616486991651-4b7a7a9a1a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 
        description: 'Bright and cheerful, a symbol of spring.' 
      },
      { 
        title: 'Lilies', 
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80', 
        description: 'Elegant and fragrant, ideal for special moments.' 
      }
    ];
    await Category.insertMany(initialCategories);
    console.log('Initial categories seeded');
  }

  const reviewCount = await Review.countDocuments();
  if (reviewCount === 0) {
    const initialReviews = [
      { 
        name: 'Anna Smith', 
        text: 'I ordered a bouquet for my mom’s birthday, and she loved it! The flowers were fresh and beautifully arranged. Will definitely order again.', 
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg' 
      },
      { 
        name: 'Michael Brown', 
        text: 'Amazing service! The delivery was on time, and the flowers looked even better than in the pictures. Highly recommended!', 
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg' 
      },
      { 
        name: 'Sophia Wilson', 
        text: 'The selection of flowers is fantastic. I found the perfect arrangement for my anniversary. Thank you, FlowerBloom!', 
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg' 
      }
    ];
    await Review.insertMany(initialReviews);
    console.log('Initial reviews seeded');
  }
}

if (mongoDb) {
  seedInitialData().catch(err => console.error('Error seeding data:', err));
}

// GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Flower Shop API!' });
});

// GET /api/status
router.get('/status', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// GET /api/categories - Fetch all flower categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/reviews - Fetch all customer reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
