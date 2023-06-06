import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../assets/styles/utils.module.css';
import homeStyles from '../assets/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={homeStyles.masthead}>
        <h2 className='ms-5 p-3 text-light w-50'>
          <strong>Plan</strong> Your Meals<br /> <strong>Shop</strong> with an easy-made shopping list<br /> <strong>Cook</strong> a new favorite recipe
        </h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection1}`}>
        <h2 className='ms-4 p-4 pb-1 text-dark w-50'>
          Let&apos;s be honest, we all hate meal planning.
        </h2>
        <p className='ms-5 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum natus omnis incidunt iure voluptatum facere eius cupiditate repudiandae nisi repellat accusamus autem, dolor laudantium voluptate dolorem voluptatem fuga? Harum, nihil.
          Veniam doloremque quia eum non distinctio in animi dolore nemo quisquam et, ad nihil dolorum minima sint rerum, accusantium vitae excepturi aspernatur consequuntur a molestiae tenetur commodi. Laboriosam, distinctio perferendis.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection2}`}>
        <h2 className='ms-4 p-4 pb-1 text-dark w-50'>
          Keep losing your list? We can help with that.
        </h2>
        <p className='ms-5 p-3'>Shopping list</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${homeStyles.homeSection3} mb-5`}>
        <h2 className='ms-4 p-4 pb-1 text-dark w-50'>
          You don&apos;t have to have &quot;chef&quot; on your resume to make our recipes.
        </h2>
        <div className="recipeShowcase d-flex justify-content-evenly">
          <Image
                priority
                src="/Images/steak.jpg"
                className="rounded"
                height={244}
                width={244}
                alt=""
            />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="rounded"
              height={244}
              width={244}
              alt=""
            />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="rounded"
              height={244}
              width={244}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="rounded"
              height={244}
              width={244}
              alt=""
            />
        {/* <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
          <Image
              priority
              src="/Images/steak.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
          <Image
              priority
              src="/Images/steak.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            /> */}
          </div>
        {/* <div className="row recipeShowcase d-flex justify-content-center">
          <Image
                priority
                src="/Images/steak.jpg"
                className="col-1 p-0"
                height={200}
                width={200}
                alt=""
            />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
          <Image
              priority
              src="/Images/steak.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
          <Image
              priority
              src="/Images/steak.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
          </div>
        <div className="row recipeShowcase d-flex justify-content-center">
          <Image
                priority
                src="/Images/steak.jpg"
                className="col-1 p-0"
                height={200}
                width={200}
                alt=""
            />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/pizza.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
          <Image
              priority
              src="/Images/steak.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
          <Image
              priority
              src="/Images/steak.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/hamburger.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
          />
        <Image
              priority
              src="/Images/fried-rice.jpg"
              className="col-1 p-0"
              height={200}
              width={200}
              alt=""
            />
          </div> */}
      </section>
    </Layout>
  );
}