import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className='container mx-auto p-1'>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
