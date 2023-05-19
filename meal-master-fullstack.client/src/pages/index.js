import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../assets/styles/utils.module.css';
import React from 'react';
import Link from 'next/link';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   console.log(allPostsData)
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </Layout>
  );
}