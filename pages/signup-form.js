import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import FormField from '../components/FormField';

const SignupForm = () => {
  const [userInfo, setUserInfo] = useState();
  const initialValues = {
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const signupSchema = yup.object({
    username: yup.string().required('Username is required'),
    mobile: yup.string().required('Mobile is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password'), null], 'Password and Confirm password must match'),
  });

  const signup = (values, { setSubmitting }) => {
    setUserInfo();
    setTimeout(() => {
      console.log(values);
      setUserInfo(values);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Simple Signup Form
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={signup}>
            {({ errors, isSubmitting, isValid, touched }) => (
              <Form noValidate>
                <FormField
                  errorMsg={errors.username}
                  isError={touched.username && errors.username}
                  label="Username"
                  name="username"
                />
                <FormField
                  errorMsg={errors.mobile}
                  isError={touched.mobile && errors.mobile}
                  label="Mobile"
                  name="mobile"
                />
                <FormField
                  errorMsg={errors.email}
                  isError={touched.email && errors.email}
                  label="Email"
                  name="email"
                  type="email"
                />
                <FormField
                  errorMsg={errors.password}
                  isError={touched.password && errors.password}
                  label="Password"
                  name="password"
                  type="password"
                />
                <FormField
                  errorMsg={errors.confirmPassword}
                  isError={touched.confirmPassword && errors.confirmPassword}
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid || isSubmitting}>
                  {isSubmitting ? <CircularProgress size={24} /> : 'Signup'}
                </Button>
                {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>
          <pre>{JSON.stringify(userInfo, null, 4)}</pre>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignupForm;
