import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Foldit:wght@300;700&display=swap" rel="stylesheet" />
        <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}