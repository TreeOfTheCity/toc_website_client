import { Outlet, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import TreeOfCityLogo from '../../assets/brandLogo.png';

// ----------------------------------------------------------------------

const StyledHeader = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(0.5, 0.5, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0.5, 0.5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  const navigate = useNavigate();
  return (
    <>
      <StyledHeader>
        <Box
          sx={{ width: 100, height: 100, cursor: 'pointer' }}
          onClick={() => {
            navigate('/');
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img alt="brandlogo" src={TreeOfCityLogo} style={{ width: '100%', height: '100%' }} />
        </Box>
      </StyledHeader>

      <Outlet />
    </>
  );
}
