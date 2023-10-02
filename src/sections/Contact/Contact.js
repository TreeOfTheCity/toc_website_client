import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ContactDialog from './ContactDialog';
import './Contact.css';

const ContactUs = () => {
  const [open, setOpen] = useState();

  return (
    <Container maxWidth={'lg'} sx={{ textAlign: 'center', mt: 10 }}>
      <Grid container bgcolor={'#09cc7f'} className="parallax">
        <Grid item xs={12} md={7} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography fontFamily={'Wix Madefor Display'} textAlign={'left'} color={'white'} fontSize={35}>
            Join Us To Change
            <br /> the World
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box
            sx={{
              color: '#03045e',
              bgcolor: 'white',
              height: 50,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 5,
              fontSize: 20,
              fontFamily: 'Wix Madefor Display',
              ':hover': {
                bgcolor: '#03045e',
                color: 'white',
              },
            }}
            onClick={() => setOpen(true)}
          >
            Become a Volunteer
          </Box>
        </Grid>
      </Grid>

      {open ? <ContactDialog open={open} setOpen={setOpen} joinAsVolunteer /> : null}
    </Container>
  );
};

export default ContactUs;
