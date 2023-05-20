import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../assets/styles/utils.module.css';
import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-center'>
          Plan, shop, cook
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </Layout>
  );
}