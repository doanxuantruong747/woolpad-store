import React from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from 'next/router';

function Slide({ src, name, title, to }) {
 const router = useRouter();
 return (
  <div className='w-full flex justify-center items-center'>

   <div className='w-[55%]'>
    <Image alt="content img" src={src} fill style={{ objectFit: "contain", borderRadius: "30px 0 0 30px" }} />
   </div>

   <div className='w-[auto]'>
    <h1 className='2xl:text-[40px] xl:text-[32px] text-[25px] font-bold text-[#000]'>{name}</h1>
    <p className='2xl:text-[30px] xl:text-[225px] text-[18px] font-semibold'>{title}</p>
    <button onClick={router.push({ to })}
     type="button"
     class="button_rotate_animation text-center shadow-box w-[140px] h-[50px] mt-[20px] text-[18px] leading-normal text-[#ffff] font-normal rounded-[40.0783px] hover:bg-success-600 bg-[#131212] hover:bg-[#111111] shadow-md"
    >
     mua ngay
    </button>
   </div>

  </div>
 )
}

export default Slide