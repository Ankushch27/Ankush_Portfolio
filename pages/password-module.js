import {
  Card,
  CardContent,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Check, Clear, Visibility, VisibilityOff } from '@material-ui/icons';
import { useState } from 'react';

const PasswordModule = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [minChars, setMinChars] = useState(false);
  const [upper, setUpper] = useState(false);
  const [num, setNum] = useState(false);
  const [endNotNum, setEndNotNum] = useState(false);

  const requirements = [
    { icon: minChars, text: 'Must be at least 8 characters long' },
    {
      icon: upper,
      text: 'Must contain 1 uppercase letter (cannot be first or last character)',
    },
    { icon: num, text: 'Must contain 1 number' },
    { icon: endNotNum, text: 'Cannot end in a number or special character' },
  ];

  const handleChange = (e) => {
    let password = '';
    password += e.target.value;
    password.length >= 8 ? setMinChars(true) : setMinChars(false);
    if (password.length > 0) {
      /[A-Z]/.test(password) &&
      !password.charAt(password.length - 1).match(/[A-Z]/) &&
      !password.charAt(0).match(/[A-Z]/)
        ? setUpper(true)
        : setUpper(false);
      /[0-9]/.test(password) ? setNum(true) : setNum(false);
      password.charAt(password.length - 1).match(/[a-zA-Z]/)
        ? setEndNotNum(true)
        : setEndNotNum(false);
    } else {
      setUpper(false)
      setNum(false)
      setEndNotNum(false);
    }
    // console.log(x);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Password Module
          </Typography>
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="h6">Password Requirements</Typography>
          {requirements.map(({ icon, text }) => (
            <div key={text}>
              {icon ? <Check color="primary" /> : <Clear color="error" />}
              <Typography variant="body1">{text}</Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default PasswordModule;
