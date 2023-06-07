import Image from "next/image";
import { useTranslation } from "react-i18next";

// card icon
import card1 from "@/assets/friendifyPage/friendifyHelp/cardItemOur1.png";
import card2 from "@/assets/friendifyPage/friendifyHelp/cardItemOur2.png";
import card3 from "@/assets/friendifyPage/friendifyHelp/cardItemOur3.png";

import CustomSection from "../common/Section";
import List from "../common/List";
import CardItemOur1 from "./cardItemOur/CardItemOur1";
import CardItemOur3 from "./cardItemOur/CardItemOur3";
import CardItemOur2 from "./cardItemOur/CardItemOur2";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [<CardItemOur1 />, <CardItemOur2 />, <CardItemOur3 />];

const FriendVision = () => {
  const { i18n, t } = useTranslation();
  const pagination = {
    clickable: true,
  };

  const slideData = [
    {
      src: card1,
      des: t("friendifyVision.textCard1"),
    },
    {
      src: card2,
      des: t("friendifyVision.textCard2"),
    },
    {
      src: card3,
      des: t("friendifyVision.textCard3"),
    },
  ];
  const title = t("friendifyVision.title");
  return (
    <CustomSection
      title={title}
      classTitle="text-[25px] sm:text-[50px] md:text-[60px] text-center text-white font-bold mb-[50px]"
    //subTitle=""
    >
      <div className="overflow-hidden w-full md:pt-[8%] pt-0 pb-[5%] ">
        <div class="hidden md:block">
          <div className=" flex flex-row justify-around 2xl:gap-x-[100px]">
            {data.map((item, index) => item)}
          </div>
        </div>

        <div class="md:hidden text-center text-white ">
          <Swiper
            spaceBetween={3}
            slidesPerView={1.2}
            pagination={pagination}
            modules={[Pagination]}
            breakpoints={{
              500: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
            }}
            className="w-full my-[40px]"
          >
            {slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[340px] ">
                  <div className="flex flex-col md:flex-row items-center rounded-[15px] ">
                    <div className="relative z-0">
                      <Image
                        alt="content img"
                        src={item.src}
                        fill
                        style={{ objectFit: "contain" }}
                        width="270px"
                        height="270px"
                      />
                      <p className="z-10 absolute text-white top-[55px] md:text-center text-left w-[90%] md:w-[100%] pl-5 text-[14px] md:text-[18px]">
                        {item.des}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </CustomSection>
  );
};

export default FriendVision;
