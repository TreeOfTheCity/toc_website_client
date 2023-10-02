import { useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
  Menu,
  MenuItem,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
// utils
import { Icon } from '@iconify/react';
import { bgBlur } from '../../../utils/cssStyles';

import TreeOfCityLogo from '../../../assets/brandLogo.png';

import './header.css';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 50;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: '#faf9f9' }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  flexGrow: 1,
  boxShadow: '0px 15px 10px -15px #888888',
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const StyledLinks = styled(Link)(({ theme }) => ({
  fontFamily: 'Wix Madefor Display',
  color: 'black',
  fontSize: 13,
  textDecoration: 'none',
  cursor: 'pointer',
  ':hover': {
    color: 'green',
  },
}));

// ----------------------------------------------------------------------

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const navlinks = [
    { label: 'Events', sectionname: 'events' },
    { label: 'About Us', sectionname: 'about-us' },
    { label: 'Our Team', sectionname: 'our-team' },
    { label: 'Gallery', sectionname: 'gallery' },
    { label: 'Contact Us', sectionname: 'contact-us' },
  ];

  const contactDetails = {
    email: {
      id: 'contact@treeofthecity.org',
      icon: <Icon icon={'ooui:message'} width={15} color={'#0A5554'} />,
    },
    cell: {
      id: '8302490723',
      icon: <Icon icon={'ic:baseline-call'} width={15} color={'#0A5554'} />,
    },
  };

  const handleNavigation = (sectionname) => {
    try {
      const url = window.location.href;
      if (pathname === '/') {
        if (url.includes('#')) {
          const newUrl = `${url.substring(0, url.indexOf('#'))}#${sectionname}`;
          window.location.replace(newUrl);

          const targetSection = document.querySelector(`#${sectionname}`);
          const offset = 150; // Adjust this value as per your requirement

          window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth',
          });
        } else {
          const newUrl = `${url}#${sectionname}`;
          window.location.replace(newUrl);

          const targetSection = document.querySelector(`#${sectionname}`);
          const offset = 150; // Adjust this value as per your requirement

          window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth',
          });
        }
      } else {
        navigate('/');
        const newUrl = `#${sectionname}`;

        const targetSection = document.querySelector(`#${sectionname}`);
        const offset = 150; // Adjust this value as per your requirement
        setTimeout(() => {
          window.location.replace(newUrl);
          window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth',
          });
        }, 500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledRoot>
      <Box sx={{ width: '100%' }}>
        <Stack
          display={'flex'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          height={'100%'}
          ml={{ lg: 15 }}
        >
          {Object.keys(contactDetails).map((d, index) => (
            <Box key={index} display={'flex'} alignItems={'center'} justifyContent={'space-between'} m={1}>
              {contactDetails[d].icon}{' '}
              <Typography fontSize={12} ml={1} color={'#637381'} fontFamily={'Wix MadeFor Display'}>
                {contactDetails[d].id}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider mt={5} />

      <StyledToolbar>
        <Stack direction="row" alignItems="center" display={'flex'} width={'100%'}>
          <Box
            sx={{ width: 80, height: 80, cursor: 'pointer', borderRadius: '50%', m: 1 }}
            onClick={() => {
              navigate('/');
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            component={Paper}
            elevation={5}
          >
            <img alt="brandlogo" src={TreeOfCityLogo} style={{ width: '100%', height: '100%' }} />
          </Box>

          <Box style={{ marginLeft: 'auto' }}>
            <Stack direction="row" alignItems="center">
              <Stack
                direction="row"
                alignItems="center"
                spacing={{
                  xs: 0.5,
                  sm: 5,
                }}
                sx={{ display: { lg: 'block', md: 'block', xs: 'none' } }}
              >
                <StyledLinks
                  sx={{ fontWeight: 900 }}
                  className="hover-underline-animation"
                  onClick={() => handleNavigation('home')}
                >
                  Home
                </StyledLinks>

                {navlinks.map((link, index) => (
                  <StyledLinks
                    key={index}
                    sx={{ fontWeight: pathname === link.sectionname ? 600 : 500 }}
                    className="hover-underline-animation"
                    onClick={() => handleNavigation(link.sectionname)}
                  >
                    {link.label}
                  </StyledLinks>
                ))}
              </Stack>

              <Button
                variant="outlined"
                color={'success'}
                onClick={() => navigate('/donation')}
                sx={{ height: '2.5rem', width: '6rem', ml: 5 }}
              >
                <Typography sx={{ fontFamily: 'Wix Madefor Display', color: 'black' }}>Donate</Typography>
              </Button>
              <IconButton
                onClick={handleClick}
                sx={{
                  mr: 1,
                  color: 'text.primary',
                  display: { lg: 'none', md: 'none', xs: 'block' },
                }}
              >
                <Icon icon="eva:menu-2-fill" />
              </IconButton>

              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {navlinks.map((link, index) => (
                  <MenuItem
                    sx={{ height: 10, marginTop: -1.5, fontFamily: 'Wix MadeFor Display' }}
                    onClick={() => handleNavigation(link.sectionname)}
                    key={index}
                  >
                    {link.label}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        {/* <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack> */}
      </StyledToolbar>
    </StyledRoot>
  );
}
