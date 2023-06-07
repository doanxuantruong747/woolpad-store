import ScrollTop from '@/components/ScrollTop';
import HeroHompage from '@/components/home_page/Hero';
import Light from '@/components/home_page/Light';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../i18next';
import Product from '@/components/home_page/Product';
import HotLine from '@/components/HotLine';



const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});

export default function Home() {
  return (
    <React.Suspense>
      <Head>
        <title>WoolpadStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <HeroHompage />
        <Light />
        <Product />
        <HotLine />
        {/* <ScrollTop /> */}
      </LayoutWrapper>
    </React.Suspense>
  );
}
