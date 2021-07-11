import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState();
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const loginSchema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const login = (values, { setSubmitting }) => {
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
            Simple Login Form
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={login}>
            {(formik) => (
              <Form noValidate>
                <Field
                  error={formik.touched.username && formik.errors.username ? true : false}
                  fullWidth
                  helperText={
                    formik.touched.username && formik.errors.username
                      ? formik.errors.username
                      : ''
                  }
                  required
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  label="Username"
                  name="username"
                />
                <Field
                  error={formik.touched.email && formik.errors.email ? true : false}
                  fullWidth
                  helperText={
                    formik.touched.email && formik.errors.email ? formik.errors.email : ''
                  }
                  required
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  label="Email"
                  name="email"
                  type="email"
                />
                <Field
                  error={formik.touched.password && formik.errors.password ? true : false}
                  fullWidth
                  helperText={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : ''
                  }
                  required
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!formik.isValid || formik.isSubmitting}>
                  {formik.isSubmitting ? <CircularProgress size={24} /> : 'Login'}
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

export default LoginForm;
