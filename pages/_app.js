// _app.js

import * as React from "react";
import '../styles/globals.css'; // Import global styles
import { CssBaseline } from '@mui/material';
import Nav from "@/components/nav";

function MyApp({ Component, pageProps }) {
  // Any additional custom logic or data fetching can be done here

  return (
    <>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <CssBaseline />
        <Nav/>
        <Component {...pageProps} />

    </>
  )
}


export default MyApp;