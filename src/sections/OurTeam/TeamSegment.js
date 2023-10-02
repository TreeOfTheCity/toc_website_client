import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { bgBlur } from '../../utils/cssStyles';
import UserSvg from '../../assets/svg/user.svg';

const TeamMemberCard = ({ image, name, description, location }) => (
  <Card sx={{ minWidth: 330, maxHeight: 460 }}>
    <CardMedia sx={{ height: 310, ...bgBlur({ color: '#F4F6F8' }) }} image={image || UserSvg} title={name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" textAlign={'left'} color={'#007B55'}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign={'left'} height={50}>
        {description}
      </Typography>
      <Box>
        <Typography
          gutterBottom
          component="div"
          color={'#3366FF'}
          fontFamily={'Wix MadeFor Display'}
          fontWeight={600}
          textAlign={'left'}
        >
          {location}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export const Team = ({ teamname, members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timesClicked, setTimesClicked] = useState(0);
  const [clicksAvailable, setClicksAvailable] = useState(0);

  const [smCurrentIndex, setSmCurrentIndex] = useState(0);

  const handleSegmentation = () => {
    try {
      const d = parseInt(members.length / 3, 10);
      if (members.length % 3 !== 0) {
        setClicksAvailable(d + 1);
      } else {
        setClicksAvailable(d);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSegmentation();
  }, []);

  return (
    <Box mt={5}>
      <Typography
        sx={{
          fontFamily: 'Wix Madefor Display',
          color: '#03045e',
          fontWeight: 600,
          textAlign: 'center',
          mb: 1,
        }}
        variant="h2"
      >
        {' '}
        {teamname}{' '}
      </Typography>

      <Grid container sx={{ display: { lg: 'flex', md: 'flex', xs: 'none' } }} alignItems={'center'}>
        <Grid item xs={1} md={0.5}>
          {members.length > 3 ? (
            <>
              {currentIndex !== 0 ? (
                <IconButton
                  onClick={() => {
                    setTimesClicked((t) => t - 1);
                    setCurrentIndex((c) => c - 3);
                  }}
                >
                  <Icon icon={'eva:arrow-ios-back-outline'} />
                </IconButton>
              ) : null}
            </>
          ) : null}
        </Grid>

        <Grid sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }} item xs={10} md={11}>
          {members[currentIndex] ? (
            <Box sx={{ m: 0.5 }}>
              <TeamMemberCard {...members[currentIndex]} />
            </Box>
          ) : null}
          {members[currentIndex + 1] ? (
            <Box sx={{ m: 0.5 }}>
              <TeamMemberCard {...members[currentIndex + 1]} />
            </Box>
          ) : null}
          {members[currentIndex + 2] ? (
            <Box sx={{ m: 0.5 }}>
              <TeamMemberCard {...members[currentIndex + 2]} />
            </Box>
          ) : null}
        </Grid>

        <Grid item xs={1} md={0.5}>
          {members.length > 3 ? (
            <>
              {timesClicked < clicksAvailable - 1 ? (
                <IconButton
                  onClick={() => {
                    setTimesClicked((t) => t + 1);
                    setCurrentIndex((c) => c + 3);
                  }}
                >
                  <Icon icon={'eva:arrow-ios-forward-outline'} />
                </IconButton>
              ) : null}
            </>
          ) : null}
        </Grid>
      </Grid>

      <Box sx={{ display: { lg: 'none', md: 'none', xs: 'block' } }}>
        <Box>
          {members[smCurrentIndex] ? (
            <Box>
              <TeamMemberCard {...members[smCurrentIndex]} />
            </Box>
          ) : null}
        </Box>

        <Box display={'flex'} justifyContent={'center'}>
          <Box>
            {smCurrentIndex !== 0 ? (
              <IconButton onClick={() => setSmCurrentIndex((c) => c - 1)}>
                <Icon icon={'eva:arrow-ios-back-outline'} />
              </IconButton>
            ) : null}
          </Box>
          <Box>
            {smCurrentIndex < members.length - 1 ? (
              <IconButton onClick={() => setSmCurrentIndex((c) => c + 1)}>
                <Icon icon={'eva:arrow-ios-forward-outline'} />
              </IconButton>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
