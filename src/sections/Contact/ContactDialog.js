import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
  Box,
  Typography,
  styled,
  Alert,
  Checkbox,
  FormHelperText,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Icon } from '@iconify/react';
import { register } from '../../services/users';

const StyledTextField = styled(TextField)({
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

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function ContactDialog({ open, setOpen, joinAsVolunteer }) {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('*required')
      .matches(/^[a-zA-Z\s]*$/, 'Special characters are not allowed'),
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email')
      .required('*required'),
    contactnumber: yup
      .string()
      .matches(/^[1-9][0-9]{9}$/, 'Invalid phone number')
      .required('*required'),
  });

  const [message, setMessage] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      contactnumber: '',
      receiveUpdates: false,
    },
    onSubmit: async () => {
      const { name, email, contactnumber, receiveUpdates } = formik.values;
      setShowLoader(true);
      const assignedrole = joinAsVolunteer ? 'VOLUNTEER' : 'MEMBER';
      const updatesReq = receiveUpdates ? 'YES' : 'NO';
      const response = await register({
        name,
        email,
        contactnumber,
        role: assignedrole,
        receiveUpdates: updatesReq,
      });
      setMessage(response);
      setShowLoader(false);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3500);
  }, [message]);

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted maxWidth="sm" fullWidth>
      <DialogTitle textAlign={'center'}>
        {joinAsVolunteer ? (
          <Typography fontSize={20} component={'h4'} fontWeight={700} gutterBottom>
            Join TreeOfCity as Volunteer
          </Typography>
        ) : (
          <Typography fontSize={20} component={'h4'} fontWeight={700} gutterBottom>
            Become a part of TreeOfCity
          </Typography>
        )}
      </DialogTitle>

      <DialogContent>
        {message.text ? (
          <Alert severity={message.type} sx={{ mb: 3 }}>
            {message.text}
          </Alert>
        ) : null}
        <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <StyledTextField
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                sx={{
                  width: '100%',
                  '.MuiInputLabel-root': {
                    fontFamily: 'Wix MadeFor Display',
                  },
                  '.MuiInputBase-input': {
                    fontFamily: 'Wix MadeFor Display',
                  },
                }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.errors.name && formik.errors.name}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <StyledTextField
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{
                  width: '100%',
                  '.MuiInputLabel-root': {
                    fontFamily: 'Wix MadeFor Display',
                  },
                  '.MuiInputBase-input': {
                    fontFamily: 'Wix MadeFor Display',
                  },
                }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.errors.email && formik.errors.email}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <StyledTextField
                label="Contact number"
                name="contactnumber"
                value={formik.values.contactnumber}
                onChange={formik.handleChange}
                sx={{
                  width: '100%',
                  '.MuiInputLabel-root': {
                    fontFamily: 'Wix MadeFor Display',
                  },
                  '.MuiInputBase-input': {
                    fontFamily: 'Wix MadeFor Display',
                  },
                }}
                error={formik.touched.contactnumber && Boolean(formik.errors.contactnumber)}
                helperText={formik.errors.contactnumber && formik.errors.contactnumber}
              />
            </Box>
            {!joinAsVolunteer ? (
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={formik.values.receiveUpdates}
                  onClick={() => {
                    formik.setValues({ ...formik.values, receiveUpdates: !formik.values.receiveUpdates });
                  }}
                  sx={{ color: 'green' }}
                  icon={<Icon icon={'ic:round-radio-button-unchecked'} width={20} />}
                  checkedIcon={<Icon icon={'solar:check-circle-bold-duotone'} color={'green'} width={20} />}
                />
                <FormHelperText> Receive daily updates? </FormHelperText>
              </Box>
            ) : (
              <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                <Icon icon={'fluent-mdl2:i-d-badge'} />
                <FormHelperText sx={{ ml: 1 }}> You will join TreeOfCity as Volunteer </FormHelperText>
              </Box>
            )}

            <Box display={'flex'} mt={2}>
              <Button variant="contained" onClick={() => setOpen(false)} sx={{ bgcolor: '#ff5a5f' }}>
                Close
              </Button>{' '}
              <Button variant="contained" type="submit" sx={{ bgcolor: '#007B55', ml: 2 }}>
                {showLoader ? <CircularProgress sx={{ color: 'white', m: 0.5 }} size={15} /> : null}
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
