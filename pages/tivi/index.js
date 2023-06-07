import HotLine from '@/components/HotLine';
import ScrollTop from '@/components/ScrollTop';
import DetailTiVi from '@/components/tivi_page/DetailTiVi';
import SubDetail from '@/components/tivi_page/SubDetail';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';


const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
 ssr: false,
});
const About = () => {
 return (
  <React.Suspense>
   <Head>
    <title>Woolstore - TiVi</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <LayoutWrapper>
    <DetailTiVi />
    <SubDetail />

    {/* <ScrollTop /> */}
    <HotLine />
   </LayoutWrapper>
  </React.Suspense>
 );
};

export default About;
