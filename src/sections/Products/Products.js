import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Box, Button, Paper, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Icon } from '@iconify/react';
import { bgBlur } from '../../utils/cssStyles';
import BirdFeeder1 from '../../assets/products/BirdFeeder1.jpg';
import BirdFeeder2 from '../../assets/products/BirdFeeder2.jpg';
import BirdFeeder3 from '../../assets/products/BirdFeeder3.jpg';
import BirdWaterFeeder1 from '../../assets/products/BirdWaterFeeder1.jpg';
import BirdWaterFeeder2 from '../../assets/products/BirdWaterFeeder2.jpg';
import BirdWaterFeeder3 from '../../assets/products/BirdWaterFeeder3.jpg';

const Products = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const products = [
    { title: 'Bird Food Feeder', images: [BirdFeeder1, BirdFeeder2, BirdFeeder3] },
    { title: 'Bird Water Feeder', images: [BirdWaterFeeder1, BirdWaterFeeder2, BirdWaterFeeder3] },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (imageIndex + 1 === 3) {
        setImageIndex(0);
      } else {
        setImageIndex((i) => i + 1);
      }
    }, 3000);
  }, [imageIndex]);

  return (
    <Container sx={{ mt: 10, textAlign: 'center', ...bgBlur({ color: '#e8f1f2' }), padding: 2 }} component={Paper}>
      <Box>
        <Typography sx={{ fontFamily: 'Wix Madefor Display', fontSize: 40, color: '#03045e', fontWeight: 600 }}>
          Our Products
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, flexWrap: 'wrap' }}>
        {products.map((p, index) => (
          <Card component={Paper} sx={{ minWidth: 345, m: 2, elevation: 10 }} key={index}>
            <CardMedia sx={{ height: 250 }} image={p.images[imageIndex]} title={p.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={'left'}>
                {p.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Products;
