import React from 'react';
import PhoneCard from './phoneCard/PhoneCard';
import PhoneImage1 from '@/assets/transaction/phoneImage1.png';
import PhoneImage2 from '@/assets/transaction/phoneImage2.png';
import PhoneImage3 from '@/assets/transaction/phoneImage3.png';
import chplay_icon from '@/assets/hero/dowload/googleplay.png';
import appstore_icon from '@/assets/hero/dowload/appstore.png';
import android_icon from '@/assets/hero/dowload/android.png';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const data = [
  {
    image: PhoneImage1,
    text: 'Download Pools Wallet',
  },
  {
    image: PhoneImage2,
    text: 'Create or Import your wallet',
  },
  {
    image: PhoneImage3,
    text: 'Start receiving or sending your digital assets',
  },
];
const TransactionContent4 = () => {
  return (
    <div className="relative w-full">
      <div
        className="overlay absolute bottom-0 left-0 right-0 h-[300px] w-full"
        style={{ background: 'linear-gradient(360deg, #00000012, transparent)' }}
      ></div>
      <div className="custom_container text-center  py-[100px] ">
        <h1 className="text-[20px] md:text-[40px] w-full">
          Using right away in just
          <span className="text-[#06C270] font-semibold">a few minutes</span>
        </h1>
        <p className="text_14_400_8080 mt-6 mb-20">Following with only 3 steps</p>
        <div className="flex justify-between flex-col md:flex-row">
          {data.map((item, index) => {
            return (
              <PhoneCard
                delay={300 * (index + 1)}
                imageUrl={item.image}
                text={item.text}
                key={index}
              />
            );
          })}
        </div>
        <div className="w-[50%] max-w-[500px] m-auto flex justify-center sm:block">
          <button className="bg-[#06C270] hover:scale-[1.1] transition-all duration-300 rounded-[10px] text-white text-[12px] sm:text-[24px] w-full h-[50px] sm:h-[70px] mt-[50px] m-auto">
            DOWNLOAD
          </button>
        </div>
        <div className="py-[100px]">
          <h1 className="text-[20px] md:text-[40px] text-center">
            Download Pools Wallet <span className="text-[#06C270] font-semibold">now!!</span>
          </h1>
          <p className="text_14_400_8080 mt-6 mb-20">The All-in-one safest decentralized wallet</p>
          <div className="dowload_group flex items-center justify-center gap-[10px] mt-[20px] md:mt-[60px] m-auto w-full">
            <AnimationOnScroll delay={100} offset={0} animateIn="animate__slideInUp">
              <div className=" hover:scale-[1.1] transition-all duration-300 relative cursor-pointer  w-[80px] sm:w-[100px] md:w-[150px] lg:w-auto">
                <Image src={appstore_icon} fill objectFit="content" />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={200} offset={0} animateIn="animate__slideInUp">
              <div className=" hover:scale-[1.1] transition-all duration-300 relative  cursor-pointer w-[80px] sm:w-[100px] md:w-[150px] lg:w-auto">
                <Image src={chplay_icon} />
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll delay={300} offset={0} animateIn="animate__slideInUp">
              <div className=" hover:scale-[1.1] transition-all duration-300 relative  cursor-pointer w-[80px] sm:w-[100px] md:w-[150px] lg:w-auto">
                <Image src={android_icon} />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionContent4;
