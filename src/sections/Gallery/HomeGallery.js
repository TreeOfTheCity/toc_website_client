import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Container, Link, Skeleton } from '@mui/material';

const HomeGallery = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../../assets/Event Central Park/', false, /\.(png|jpe?g|JPG)$/));

  const handleImageTransition = () => {
    try {
      if (imageIndex + 3 >= images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((i) => i + 3);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleImageTransition();
    }, 5000);
  }, [imageIndex]);

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        sx={{
          fontFamily: 'Wix Madefor Display',
          color: '#03045e',
          fontWeight: 600,
          textAlign: 'center',
        }}
        variant="h2"
      >
        Gallery
      </Typography>

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            {images[imageIndex] ? (
              <Box>
                <img style={{ borderRadius: 5 }} alt="central_park" src={images[imageIndex]} loading="lazy" />
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} md={4}>
            {images[imageIndex + 1] ? (
              <Box>
                <img style={{ borderRadius: 5 }} alt="central_park" src={images[imageIndex + 1]} loading="lazy" />
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} md={4}>
            {images[imageIndex + 2] ? (
              <Box>
                <img style={{ borderRadius: 5 }} alt="central_park" src={images[imageIndex + 2]} loading="lazy" />
              </Box>
            ) : null}
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, ml: '90%' }}>
          <Link href="/gallery">View more</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeGallery;
