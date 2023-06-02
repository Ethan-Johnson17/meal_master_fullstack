import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../assets/styles/utils.module.css';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

// import { PropTypes } from 'mobx-react/dist/propTypes';

const name = 'MealMaster';
export const siteTitle = 'MealMaster';

// eslint-disable-next-line react/prop-types
export default function Layout({ children, home }) {
  return (
    <div className="container-fluid p-0">
      <Head>
        <link rel="icon" href="/Images/hamburger.svg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  home: PropTypes.bool
}