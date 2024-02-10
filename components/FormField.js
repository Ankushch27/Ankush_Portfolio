import { TextField } from '@mui/material';
import { Field } from 'formik';

const FormField = ({ errorMsg, isError, ...props }) => {
  return (
    <Field
      as={TextField}
      error={isError ? true : false}
      fullWidth
      helperText={isError ? errorMsg : ''}
      margin="normal"
      required
      {...props}
    />
  );
};

export default FormField;
