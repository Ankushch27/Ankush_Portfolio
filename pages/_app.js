import { CssBaseline, ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import theme from '../theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
