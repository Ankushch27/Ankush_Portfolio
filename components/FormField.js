import { TextField } from '@material-ui/core';
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
      variant="outlined"
      {...props}
    />
  );
};

export default FormField;
