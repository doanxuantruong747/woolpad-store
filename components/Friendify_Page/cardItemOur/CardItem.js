import Image from "next/image";
import React from "react";
import card1 from "@/assets/friendifyPage/friendifyHelp/cardItemOur1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CardItem = ({ src, title, className }) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      className="w-full flex justify-center"
    >
      <div className="w-[90%] 2xl:w-[80%] relative flex justify-center">
        <div className=" relative ">
          <Image objectFit="content" fill src={src} />
        </div>
        <p className="z-[99] text-white text-left top-[20%] w-[92%] m-auto  absolute text-[12px] md:text-[15px] lg:text-[20px] xl:text-[24px] font-normal">
          {title}
        </p>
      </div>
      //{" "}
    </AnimationOnScroll>
  );
};

export default CardItem;
