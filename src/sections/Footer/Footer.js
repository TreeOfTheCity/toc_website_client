import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import ContactDialog from '../Contact/ContactDialog';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ padding: 5, backgroundColor: '#09cc7f' }} maxWidth>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <StyledBox>
            <Typography
              sx={{ fontFamily: 'Wix Madefor Display', fontSize: 25, fontWeight: 600, textAlign: 'center', m: 1 }}
              color={'#03045e'}
            >
              Get in touch
            </Typography>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography> TreeOfCity </Typography>
              <Typography>
                {' '}
                140, Govind Vihar, Gandhi Path West <br />
                Lalarpura,
              </Typography>
              <Typography> Jaipur - 302021 </Typography>
              <Typography> 8302490723 </Typography>
              <a href="mailto:contact@treeofthecity.org">
                <Typography> contact@treeofthecity.org </Typography>
              </a>
            </Box>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledBox>
            <Typography
              sx={{ fontFamily: 'Wix Madefor Display', fontSize: 25, fontWeight: 600, textAlign: 'center', m: 1 }}
              color={'#03045e'}
            >
              Join TreeOfCity
            </Typography>
            <Box sx={{ mt: 3, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <Typography my={0.5} component={Link} href={'/donation'} sx={{ textDecoration: 'none', color: 'black' }}>
                {' '}
                Donate{' '}
              </Typography>
              <Typography my={0.5} component={Button} disableFocusRipple onClick={() => setOpen(true)}>
                {' '}
                Volunteer{' '}
              </Typography>
            </Box>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledBox>
            <Typography
              sx={{ fontFamily: 'Wix Madefor Display', fontSize: 25, fontWeight: 600, textAlign: 'center', m: 1 }}
              color={'#03045e'}
            >
              Socials
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                ml: 3,
              }}
            >
              <Box display={'flex'} alignItems={'center'}>
                <IconButton>
                  <Icon icon={'mingcute:meta-fill'} color={'#03045e'} />
                </IconButton>
                <Typography> Meta </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <IconButton>
                  <Icon icon={'mingcute:youtube-fill'} color={'#03045e'} />
                </IconButton>
                <Typography> YouTube </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <Typography
                  sx={{ textDecoration: 'none', color: 'black' }}
                  component={Link}
                  href="https://www.instagram.com/treeofthe_city/"
                  target="_blank"
                >
                  <IconButton>
                    <Icon icon={'ri:instagram-fill'} color={'#03045e'} />
                  </IconButton>{' '}
                  Instagram{' '}
                </Typography>
              </Box>
            </Box>
          </StyledBox>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%', height: 50, mt: 2 }}>
        <Typography fontFamily={'Wix Madefor Display'} fontWeight={600} textAlign={'center'}>
          Designed and Developed by <br /> Morpankh code square Community
        </Typography>
      </Box>

      {open ? <ContactDialog open={open} setOpen={setOpen} /> : null}
    </Container>
  );
};

export default Footer;
