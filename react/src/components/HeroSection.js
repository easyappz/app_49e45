import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function HeroSection() {
  return (
    <Box sx={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1528826104212-b96c68e6c5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }
    }}>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          Beautiful Flowers for Every Occasion
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          Handpicked and delivered with love
        </Typography>
        <Button variant="contained" size="large" sx={{ backgroundColor: '#C28B7D', '&:hover': { backgroundColor: '#b07a6e' }, padding: '12px 24px', fontSize: '1.1rem' }}>
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
