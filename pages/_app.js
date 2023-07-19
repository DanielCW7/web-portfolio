// _app.js

import React from 'react';
import '../styles/globals.css'; // Import global styles
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';

function MyApp({ Component, pageProps }) {
  // Any additional custom logic or data fetching can be done here

  return (
    <Container>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <CssBaseline />
        <Component {...pageProps} />
    </Container>
  )
}


export default MyApp;