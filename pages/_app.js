// _app.js

import * as React from "react";
import { CssBaseline } from '@mui/material';
import '@/styles/globals.css'; // Import global styles
import Nav from "@/components/nav";
import Footer from "@/components/footer";

function MyApp({ Component, pageProps }) {

  return (
    <>
        <CssBaseline />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <Nav/>
        <Component {...pageProps} />
        <Footer />
    </>
  )
}


export default MyApp;