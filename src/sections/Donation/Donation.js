import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  styled,
  Button,
  Tabs,
  Tab,
  Paper,
  FormHelperText,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getCountries, getStates } from '../../services/locationapi';
import TreeOfCityLogo from '../../assets/brandLogo.png';
import QrCode from '../../assets/QrCode.jpg';

const CustomTextField = styled(TextField)({
  width: '100%',
  '& .MuiTextField-root': {
    width: '50ch',
  },
  '& label.Mui-focused': {
    color: 'black',
  },
  '& label': {
    color: '#36B37E',
    fontFamily: 'Wix MadeFor Display',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#919EAB',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

const OnlinePaymentGateway = () => {
  const validationSchema = yup.object({
    amount: yup
      .string()
      .required('Please enter donation amount')
      .matches(/^[0-9]*$/, 'Invalid'),
    firstName: yup
      .string()
      .required('*required')
      .matches(/^[a-zA-Z\s]*$/, 'Special characters are not allowed'),
    secondName: yup
      .string()
      .required('*required')
      .matches(/^[a-zA-Z\s]*$/, 'Special characters are not allowed'),
    phoneNumber: yup
      .string()
      .required('*required')
      .matches(/^[1-9][0-9]{9}$/, 'Invalid phone number'),
    emailAddress: yup
      .string()
      .required('*required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    donorType: yup.string().required('*required'),
    pan: yup
      .string()
      .required('*required')
      .matches(/^[A-Za-z0-9]*$/, 'Invalid PAN'),
    country: yup.string().required('*required'),
    state: yup.string().required('*required'),
    city: yup.string().required('*required'),
    addressLine: yup.string().required('*required'),
    postalCode: yup
      .string()
      .required('*required')
      .matches(/^\d{6}$/, 'Invalid PAN'),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      amount: 3000,
      firstName: '',
      secondName: '',
      phoneNumber: '',
      emailAddress: '',
      donorType: '',
      pan: '',
      remarks: '',
      country: '',
      countryIso2: '',
      state: '',
      city: '',
      addressLine: '',
      postalCode: '',
    },
    onSubmit: async () => {
      console.log(formik);
    },
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const handleGetCounties = async () => {
    try {
      const response = await getCountries();
      setCountries(response.countries);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetStates = async () => {
    try {
      if (formik.values.countryIso2) {
        const response = await getStates(formik.values.countryIso2);
        setStates(response.states);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetCounties();
  }, []);

  useEffect(() => {
    handleGetStates();
  }, [formik.values.country]);

  return (
    <Container sx={{ mt: 2, p: 1 }} component={Paper}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Container sx={{ mt: 3 }}>
          <Typography
            sx={{
              fontFamily: 'Wix Madefor Display',
              fontSize: 25,
              color: 'black',
              fontWeight: 600,
              textAlign: 'left',
            }}
          >
            Donation Form
          </Typography>

          <FormHelperText>Payment gateway is not working. Please donate using UPI or bank transfer</FormHelperText>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={12}>
              <Box>
                <CustomTextField
                  label="Amount"
                  variant="outlined"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={6} md={4}>
              <Box>
                <CustomTextField
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={6} md={4}>
              <Box>
                <CustomTextField
                  label="Second Name"
                  variant="outlined"
                  name="secondName"
                  value={formik.values.secondName}
                  onChange={formik.handleChange}
                  error={formik.touched.secondName && Boolean(formik.errors.secondName)}
                  helperText={formik.touched.secondName && formik.errors.secondName}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <CustomTextField
                  label="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                <CustomTextField
                  label="Email Address"
                  variant="outlined"
                  name="emailAddress"
                  value={formik.values.emailAddress}
                  onChange={formik.handleChange}
                  error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                  helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={6} md={5}>
              <Box>
                <FormControl>
                  <FormLabel>
                    <Typography fontFamily={'Wix MadeFor Display'} color={'#36B37E'}>
                      Type of donor
                    </Typography>
                  </FormLabel>
                  <RadioGroup row name="donorType" onChange={formik.handleChange} value={formik.values.donorType}>
                    <FormControlLabel
                      value="individual"
                      control={<Radio size="sm" />}
                      label={<Typography>Individual</Typography>}
                    />
                    <FormControlLabel
                      value="organization"
                      control={<Radio size="sm" />}
                      label={<Typography>Organization</Typography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={6} md={7}>
              <Box>
                <CustomTextField
                  label="PAN"
                  variant="outlined"
                  name="pan"
                  value={formik.values.pan}
                  onChange={formik.handleChange}
                  error={formik.touched.pan && Boolean(formik.errors.pan)}
                  helperText={formik.touched.pan && formik.errors.pan}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                <textarea
                  placeholder="Any remarks?"
                  name="remarks"
                  value={formik.values.remarks}
                  onChange={formik.handleChange}
                  style={{ width: '100%', height: 100 }}
                  autoComplete="off"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ mt: 3 }}>
          <Typography
            sx={{
              fontFamily: 'Wix Madefor Display',
              fontSize: 20,
              color: 'black',
              fontWeight: 600,
              textAlign: 'left',
            }}
          >
            Billing details
          </Typography>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={12}>
              <Box>
                <Autocomplete
                  disablePortal
                  options={countries.map((c) => `${c.iso2} ${c.name}`)}
                  sx={{ width: '100%' }}
                  name="country"
                  value={formik.values.country}
                  onChange={(_, v) => {
                    const [iso2, ...rest] = v.split(' ');
                    formik.setValues({ ...formik.values, country: rest.join(' '), countryIso2: iso2 });
                  }}
                  ListboxProps={{ style: { maxHeight: 185 } }}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      label="Select Country"
                      error={formik.touched.country && Boolean(formik.errors.country)}
                      helperText={formik.touched.country && formik.errors.country}
                    />
                  )}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                <CustomTextField
                  label="Address line"
                  name="addressLine"
                  value={formik.values.addressLine}
                  onChange={formik.handleChange}
                  error={formik.touched.addressLine && Boolean(formik.errors.addressLine)}
                  helperText={formik.touched.addressLine && formik.errors.addressLine}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                <CustomTextField
                  label="City"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box>
                <Autocomplete
                  options={states.map((s) => s.name)}
                  sx={{ width: '100%' }}
                  name="state"
                  value={formik.values.state}
                  onChange={(_, v) => {
                    formik.setValues({ ...formik.values, state: v });
                  }}
                  ListboxProps={{ style: { maxHeight: 185 } }}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      label="Select State"
                      error={formik.touched.state && Boolean(formik.errors.state)}
                      helperText={formik.touched.state && formik.errors.state}
                    />
                  )}
                  autocomplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box>
                <CustomTextField
                  label="Zip/Postal Code"
                  name="postalCode"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                  helperText={formik.touched.postalCode && formik.errors.postalCode}
                  autocomplete="off"
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant={'contained'} sx={{ backgroundColor: '#007B55' }} disabled>
              Donate
            </Button>

            <FormHelperText>Payment gateway is not working. Please donate using UPI or bank transfer</FormHelperText>
          </Box>
        </Container>
      </form>
    </Container>
  );
};

const BankTransfer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 130,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component={Paper}
            sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 5, p: 2, height: 300 }}
          >
            <img alt="qr_code" src={QrCode} style={{ width: 210, height: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component={Paper} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 5, p: 2 }}>
            <Typography fontSize={25}>TreeOfCity Bank Details</Typography>
            <img src={TreeOfCityLogo} alt="tree_of_city" style={{ width: 150, height: 150 }} />
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Typography>Account No. : 50200080926908</Typography>
              <Typography>IFSC Code : HDFC0007035</Typography>
              <Typography textAlign={'center'}>Account Name: Tree of the city foundation</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const DonationWrapper = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank-transfer');

  const tabs = [
    {
      label: 'Bank / UPI',
      slug: 'bank-transfer',
    },
    {
      label: 'Online Payment Gateway',
      slug: 'online-payment-gateway',
    },
  ];

  const PUBLIC_KEY =
    'pk_test_51NICXXSDTcoNMaI4aWJQ4G6gMfpWyzhr8DYZ8S7TOk7QzFrzVxtO0lWCOsqk6dZvomTU1zZjk5wuKIXHkp8p9TLN00mgDVglbq';
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  const componentObj = {
    'bank-transfer': <BankTransfer />,
    'online-payment-gateway': (
      <Elements stripe={stripeTestPromise}>
        <OnlinePaymentGateway />
      </Elements>
    ),
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        sx={{
          fontFamily: 'Wix Madefor Display',
          fontSize: 40,
          color: '#03045e',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Support TreeOfCity
      </Typography>

      <Container
        sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }, justifyContent: 'center', mt: 4 }}
        component={Paper}
      >
        <Tabs value={paymentMethod} onChange={(_, newValue) => setPaymentMethod(newValue)}>
          {tabs.map((t, index) => (
            <Tab
              value={t.slug}
              key={index}
              label={<Typography fontFamily={'Wix MadeFor Display'}>{t.label}</Typography>}
              disableRipple
            />
          ))}
        </Tabs>
      </Container>

      <Box sx={{ display: { lg: 'none', sm: 'none', xs: 'flex' }, justifyContent: 'center' }} component={Paper}>
        <Tabs value={paymentMethod} onChange={(_, newValue) => setPaymentMethod(newValue)}>
          {tabs.map((t, index) => (
            <Tab value={t.slug} sx={{ fontSize: 10 }} key={index} label={t.label} />
          ))}
        </Tabs>
      </Box>

      {componentObj[paymentMethod]}
    </Box>
  );
};

export default DonationWrapper;
