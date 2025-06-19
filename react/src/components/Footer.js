import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#5C4033', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalFloristIcon sx={{ mr: 1, color: '#C28B7D' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                FlowerBloom
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Delivering beautiful flowers with love and care since 2010.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>Home</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>Shop</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>About Us</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: info@flowerbloom.com</Typography>
            <Typography variant="body2">Phone: +1 (555) 123-4567</Typography>
            <Typography variant="body2">Address: 123 Flower St, Bloom City</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} FlowerBloom. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
