import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <CategoriesSection />
        <ReviewsSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
