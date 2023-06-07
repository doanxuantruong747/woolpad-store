import Image from "next/image";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const FeatureCard = ({ src, title, className }) => {
  return (
    // <div className={`bg-[#141B22] p-[15px]  lg:py-[50px] lg:px-[20px] flex flex-col items-center justify-center w-[100px] md:w-[200px] lg:w-[300px] aspect-[16/9] rounded-[15px] ${className}`}>
    <div className={`${className}`}>
      <AnimationOnScroll animateIn="animate__zoomIn " className="w-full">
        <div className=" relative md:w-[250px] md:h-[60px]  lg:w-[350px] lg:h-[90px] ">
          <Image objectFit="content" layout="fill" fill src={src} />
          <p
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="z-[99] text-white text-center lg:text-left lg:pl-[5px] 2xl:text-center 2xl:pl-0 md:text-[15px] lg:text-[20px] absolute w-[90%]"
          >
            {title}
          </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default FeatureCard;
