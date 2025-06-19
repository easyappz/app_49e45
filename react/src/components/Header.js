import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', color: '#5C4033' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <LocalFloristIcon sx={{ mr: 1, color: '#C28B7D' }} />
            <Typography variant="h6" noWrap component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
              FlowerBloom
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none', fontSize: '1rem' }}>Home</Button>
            <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Shop</Button>
            <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Contact</Button>
            <Button variant="contained" sx={{ backgroundColor: '#C28B7D', color: '#fff', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#b07a6e' } }}>
              Order Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
