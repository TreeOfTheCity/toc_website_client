import React, { useEffect, useState, Suspense } from 'react';
import { Container, Grid, Typography, Box, Button, Paper, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { bgBlur } from '../../utils/cssStyles';
import BrandLogo from '../../assets/landingPageImg.jpg';

import Events from '../Events/Events';
import Projects from '../Events/Projects/Projects';
import ContactUs from '../Contact/Contact';

import ContactDialog from '../Contact/ContactDialog';
import DSC_0056 from '../../assets/Event Central Park/DSC_0056.jpg';
import DSC_0063 from '../../assets/Event Central Park/DSC_0063.jpg';
import DSC_0075 from '../../assets/Event Central Park/DSC_0075.jpg';

const OurTeam = React.lazy(() => import('../OurTeam/OurTeam'));
const Mission = React.lazy(() => import('../Mission/Mission'));
const HomeGallery = React.lazy(() => import('../Gallery/HomeGallery'));

const images = [DSC_0056, DSC_0063, DSC_0075];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const LazyLoader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

const ImageCatalog = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageIndex = () => {
    try {
      if (imageIndex + 1 >= images.length) {
        setImageIndex(0);
      } else {
        setImageIndex((index) => index + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleImageIndex();
    }, 2000);
  }, [imageIndex]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={page}
        src={images[imageIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        transition={{
          x: { stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        style={{ height: 380, width: '100%', borderRadius: 5, marginTop: 10 }}
      />
    </AnimatePresence>
  );
};

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <title> TreeOfCity </title>
      </Helmet>

      <section id="home">
        <Container>
          <Grid container spacing={4} mt={5}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', mt: -2 }} justifyContent={'center'} display={'flex'} alignItems={'center'}>
                <img alt="brand_logo" src={BrandLogo} style={{ height: 570, width: '90%', borderRadius: 10 }} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{ height: '100%', padding: 2 }}
                justifyContent={'flex-end'}
                display={'flex'}
                alignItems={'center'}
              >
                <>
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{ fontFamily: 'Wix Madefor Display', fontWeight: 900, color: '#03045e' }}
                    >
                      Who are we?
                    </Typography>
                    <Typography textAlign={'justify'} fontFamily={'Poppins'} fontWeight={600} mt={1} lineHeight={2}>
                      {' '}
                      We are a non-governmental organization (NGO) committed to making a positive and lasting impact on
                      society. Our mission is to address and tackle some of the most pressing issues and challenges
                      faced by communities locally, nationally, and even globally.{' '}
                    </Typography>
                    <Typography textAlign={'justify'} fontFamily={'Poppins'} fontWeight={600} mt={1} lineHeight={2}>
                      {' '}
                      Since 2019 TreeOfCity has been performing the taking care of activities for Nature, Animal and
                      Humane.
                    </Typography>

                    <Button
                      onClick={() => setOpen(true)}
                      variant={'contained'}
                      sx={{ marginTop: 10, width: '100%', height: 50, bgcolor: '#09cc7f' }}
                    >
                      Join Us As Member
                    </Button>
                  </Box>
                </>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id="mission">
        <Suspense fallback={<LazyLoader />}>
          <Mission />
        </Suspense>
      </section>

      <section id="about-us">
        <Container sx={{ mt: 10, textAlign: 'center', ...bgBlur({ color: '#faf9f9' }), padding: 5 }} component={Paper}>
          <Typography
            textAlign={'center'}
            fontFamily={'Wix Madefor Display'}
            fontSize={20}
            color={'#52B788'}
            fontWeight={600}
          >
            About our foundation
          </Typography>
          <Grid container spacing={4} mt={1}>
            <Grid item xs={12} md={6}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'Wix Madefor Display',
                    color: '#03045e',
                    fontWeight: 600,
                    textAlign: 'left',
                  }}
                  variant="h3"
                >
                  HELP
                </Typography>

                <Typography sx={{ color: '#03045e' }}>🔹</Typography>

                <Typography
                  sx={{
                    fontFamily: 'Wix Madefor Display',
                    color: '#03045e',
                    fontWeight: 600,
                    textAlign: 'left',
                  }}
                  variant="h3"
                >
                  HEAL
                </Typography>

                <Typography sx={{ color: '#03045e' }}>🔹</Typography>

                <Typography
                  sx={{
                    fontFamily: 'Wix Madefor Display',
                    color: '#03045e',
                    fontWeight: 600,
                    textAlign: 'left',
                  }}
                  variant="h3"
                >
                  CARE
                </Typography>
              </Box>

              <Typography fontFamily={'Wix Madefor Display'} lineHeight={2} textAlign={'justify'} mt={3}>
                {' '}
                We are an NGO dedicated to making a positive impact on society. Our mission is to address pressing
                social, environmental, and humanitarian challenges. Through collaboration and collective action, we
                strive to create sustainable solutions that improve lives and empower communities. With transparency,
                integrity, and accountability as our guiding principles, we work tirelessly to build a more inclusive
                and sustainable world. Together, we are committed to making a difference and creating lasting change.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <ImageCatalog />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id="events">
        <Events />
        <Projects />
      </section>

      <section id="contact-us">
        <ContactUs />
      </section>

      <section id="gallery">
        <Suspense fallback={<LazyLoader />}>
          <HomeGallery />
        </Suspense>
      </section>

      <section id="our-team">
        <Suspense fallback={<LazyLoader />}>
          <OurTeam />
        </Suspense>
      </section>

      {open ? <ContactDialog open={open} setOpen={setOpen} /> : null}
    </div>
  );
};

export default Home;
