import React from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from './Navbar';
function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Component {...pageProps} />
      <NavbarComponent />
    </>
  );
}

export default MyApp;
