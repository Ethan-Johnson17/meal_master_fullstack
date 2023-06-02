import React from "react";
import '../assets/styles/globals.css'
import '../assets/scss/main.scss'
import { UserProvider } from '@auth0/nextjs-auth0/client'

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}