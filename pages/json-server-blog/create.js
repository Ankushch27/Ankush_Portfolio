import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import FormField from '../../components/FormField';

const CreateBlog = () => {
  const router = useRouter();
  const initialValues = {
    title: '',
    body: '',
  };
  const createBlog = async (values, { setSubmitting }) => {
    // setUserInfo();
    console.log(values);
    // setUserInfo(values);
    await fetch('http://localhost:4000/posts', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });
    setSubmitting(false);
    router.push('/json-server-blog');
  };
  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography variant="h4">Create New Blog</Typography>
          <Formik initialValues={initialValues} onSubmit={createBlog}>
            {({ errors, isSubmitting, isValid, touched }) => (
              <Form noValidate>
                <FormField
                  errorMsg={errors.title}
                  isError={touched.title && errors.title}
                  label="Blog Title"
                  name="title"
                />
                <FormField
                  multiline
                  rows={4}
                  errorMsg={errors.body}
                  isError={touched.body && errors.body}
                  label="Blog Body"
                  name="body"
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid || isSubmitting}>
                  {isSubmitting ? <CircularProgress size={24} /> : 'Create'}
                </Button>
                {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreateBlog;
