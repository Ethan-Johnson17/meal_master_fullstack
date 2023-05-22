import React from "react";
import '../assets/styles/globals.css'
import '../assets/scss/main.scss'

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}