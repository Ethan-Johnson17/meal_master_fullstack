import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../assets/styles/utils.module.css';
import homeStyles from '../assets/styles/Home.module.css'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={homeStyles.masthead}>
        <h2 className='ms-5 p-3 text-light w-50'>
          <strong>Plan</strong> Your Meals<br /> <strong>Shop</strong> with an easy-made shopping list<br /> <strong>Cook</strong> a new favorite recipe
        </h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection1}`}>
        <h2 className='ms-5 p-3 text-dark w-50'>
          Let&apos;s be honest, we all hate meal planning.
        </h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection2}`}>
        <h2 className='ms-5 p-3 text-dark w-50'>
          Keep losing your list? We can help with that.
        </h2>
        <p>Shopping list</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection3}`}>
        <h2 className='ms-5 p-3 text-dark w-50'>
          You don&apos;t have to have &quot;chef&quot; on your resume to make our recipes.
        </h2>
        <p>Recipe images</p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection2}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section> */}
    </Layout>
  );
}