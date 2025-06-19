import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const reviews = [
  { name: 'Anna Smith', text: 'I ordered a bouquet for my mom’s birthday, and she loved it! The flowers were fresh and beautifully arranged. Will definitely order again.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Michael Brown', text: 'Amazing service! The delivery was on time, and the flowers looked even better than in the pictures. Highly recommended!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sophia Wilson', text: 'The selection of flowers is fantastic. I found the perfect arrangement for my anniversary. Thank you, FlowerBloom!', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

function ReviewsSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F9F5F0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 6, color: '#5C4033', fontWeight: 'bold' }}>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid item key={review.name} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, mx: 'auto', p: 3, backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: 3, textAlign: 'center' }}>
                <CardContent>
                  <FormatQuoteIcon sx={{ fontSize: 48, color: '#C28B7D', mb: 2 }} />
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "{review.text}"
                  </Typography>
                  <Avatar alt={review.name} src={review.avatar} sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }} />
                  <Typography variant="h6" component="div" sx={{ color: '#5C4033' }}>
                    {review.name}
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

export default ReviewsSection;
