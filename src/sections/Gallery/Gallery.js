import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Container, Link, Skeleton } from '@mui/material';

export const HomeGallery = () => {
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

const Gallery = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../../assets/Event Central Park/', false, /\.(png|jpe?g|JPG)$/));

  return (
    <Container sx={{ mt: 10 }}>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Wix Madefor Display',
            fontSize: 40,
            color: '#03045e',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          Gallery
        </Typography>
      </Box>

      {images && images.length ? (
        <Grid container spacing={0.5} mt={5}>
          {images.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <img src={image} alt="central_park" style={{ height: 250, width: 500 }} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={0.5} mt={5}>
          {Array.from({ length: 50 }).map((index) => (
            <Grid item xs={12} md={3} key={index}>
              <Skeleton />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Gallery;
