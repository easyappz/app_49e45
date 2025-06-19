import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';

const categories = [
  { title: 'Roses', image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', description: 'Classic and romantic, perfect for any occasion.' },
  { title: 'Tulips', image: 'https://images.unsplash.com/photo-1616486991651-4b7a7a9a1a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', description: 'Bright and cheerful, a symbol of spring.' },
  { title: 'Lilies', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80', description: 'Elegant and fragrant, ideal for special moments.' },
];

function CategoriesSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 6, color: '#5C4033', fontWeight: 'bold' }}>
          Our Flower Categories
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item key={category.title} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#5C4033' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CategoriesSection;
