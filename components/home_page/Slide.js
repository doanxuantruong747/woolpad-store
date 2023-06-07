import Image from "next/image";
import { useTranslation } from "react-i18next";

// card icon

import CustomSection from "../common/Section";

import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Slide = () => {
  const { i18n, t } = useTranslation();
  const pagination = {
    clickable: true,
  };


  const slideData = [
    {
      src: "https://i.imgur.com/c6Ejz3U.jpg",

    },
    {
      src: "https://i.imgur.com/zTBPNle.jpg",

    },
    {
      src: "https://i.imgur.com/1DFFZto.jpg",

    },
  ];

  return (

    <CustomSection>
      <div className="overflow-hidden w-full md:pt-[8%] pt-0 pb-[5%] ">
        <Swiper
          //spaceBetween={3}
          effect={"fade"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination, EffectFade, Autoplay]}
          className="w-full "
        >
          {slideData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full ">
                <div className="flex flex-col md:flex-row items-center rounded-[15px] ">
                  <div className="w-full">
                    <Image
                      alt="content img"
                      src={item.src}
                      fill
                      style={{ objectFit: "contain" }}
                      width="1600px"
                      height="900px"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CustomSection>
  );
};

export default Slide;
