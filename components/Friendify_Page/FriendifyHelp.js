import Image from "next/image";
import { useTranslation } from "react-i18next";

// card icon
import centerImage from "@/assets/friendifyPage/friendifyHelp/centerImage1.png";
import centerImageFix from "@/assets/friendifyPage/friendifyHelp/centerImageFix.png";

import left1 from "@/assets/friendifyPage/friendifyHelp/left1.png";
import left2 from "@/assets/friendifyPage/friendifyHelp/left2.png";
import recMobi from "@/assets/friendifyPage/friendifyHelp/RecMobi.png";
import right1 from "@/assets/friendifyPage/friendifyHelp/ritgh1.png";
import right2 from "@/assets/friendifyPage/friendifyHelp/ritgh2.png";
import right3 from "@/assets/friendifyPage/friendifyHelp/ritgh3.png";

import { Header_Height } from "constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import FeatureCard from "./FeatureCard";

import CustomSection from "../common/Section";

const FriendifyHelp = () => {
  const { i18n, t } = useTranslation();
  const title = t("friendifyCanHelp.title");

  const cardsData = [
    {
      src: left1,
      title: t("friendifyCanHelp.titleCardleft1"),
      className: "2xl:scale-[1] xl:scale-[0.9] lg:scale-[0.8] z-[99] absolute 2xl:left-[12%] xl:left-[8%] lg:left-[0%] md:left-[0%] top-[25%] ",
    },
    {
      src: left2,
      title: t("friendifyCanHelp.titleCardleft2"),
      className: "2xl:scale-[1] xl:scale-[0.9] lg:scale-[0.8] z-[99] absolute 2xl:left-[15%] xl:left-[9%] lg:left-[2%] md:left-[2%] top-[60%]",
    },
    {
      src: right1,
      title: t("friendifyCanHelp.titleCardRigh1"),
      className:
        "2xl:scale-[1] xl:scale-[0.9] lg:scale-[0.8] z-[99] absolute 2xl:right-[15%] xl:right-[9%] lg:right-[2%] md:right-[0%] top-[15%] flex justify-end",
    },
    {
      src: right2,
      title: t("friendifyCanHelp.titleCardRigh2"),
      className: "2xl:scale-[1] xl:scale-[0.9] lg:scale-[0.8] z-[99] absolute 2xl:right-[12%] xl:right-[7%] lg:right-[0%] md:right-[0%] 2xl:top-[43%] xl:top-[42%] md:top-[40%]",
    },
    {
      src: right3,
      title: t("friendifyCanHelp.titleCardRigh3"),
      className: "2xl:scale-[1] xl:scale-[0.9] lg:scale-[0.8]  absolute 2xl:right-[15%] xl:right-[9%] lg:right-[2%] md:right-[2%] 2xl:top-[71%] xl:top-[68%] lg:top-[65%] md:top-[65%]",
    },
  ];

  return (
    <div className="mb-[100px] lg:mb-[60px] 2xl:mb-[50px] text-center w-full">
      <CustomSection title={title}>
        <div class="hidden md:block">
          <div
            style={{ maxHeight: `calc(100vh - ${Header_Height})` }}
            className=" relative custom_container flex items-center justify-center flex-col h-[400px] sm:h-[500px] lg:h-[510px] 2xl:h-[650px]"
          >
            {cardsData.map((item, index) => {
              return (
                <FeatureCard
                  src={item.src}
                  title={item.title}
                  key={item.title}
                  className={item.className}
                />
              );
            })}
            <div className="slider_img aspect-[9/9] ">
              <AnimationOnScroll
                animateIn="animate__zoomIn"
                className="h-fit flex flex-col items-center"
              >
                <div className="relative w-[450px] lg:w-[460px] 2xl:w-[550px] aspect-[3/3] ">
                  <Image
                    src={centerImageFix}
                    alt="phone"
                    fill
                    style={{ objectFit: "contain" }}
                    layout="fill"
                  />
                </div>
                <a href="/services">
                  <button
                    type="button"
                    class="button_rotate_animation text-center shadow-box w-[125px] md:w-[250px] h-[24px] md:h-[44px] mt-[20px] text-[22px] md:text-[28px] font-bold leading-normal text-white rounded-[40.0783px] hover:bg-success-600 bg-[#2D642D] hover:bg-[#245024] shadow-md"
                  >
                    {t("friendifyCanHelp.titleButton")}
                  </button>
                </a>
              </AnimationOnScroll>
            </div>
          </div>
        </div>

        <div class="md:hidden text-center ">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <div class=" text-center">
              <div className="slider_img  ">
                <Image
                  src={centerImage}
                  alg="phone"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={` flex flex-col items-center justify-center `}>
                <div className=" relative translate-y-[2px] w-[95%]">
                  <Image objectFit="content" fill src={recMobi} />
                </div>
                <p className="z-[99] text-white text-center text-[15px] absolute">
                  {t("friendifyCanHelp.titleCardRigh1")}
                  {/* Quick and accurate responses */}
                </p>
              </div>

              <div
                className={` flex flex-col items-center justify-center mt-[25px]`}
              >
                <div className=" relative translate-y-[2px] w-[95%]">
                  <Image objectFit="content" fill src={recMobi} />
                </div>
                <p className="z-[99] text-white text-center text-[15px] absolute">
                  {t("friendifyCanHelp.titleCardRigh2")}
                  {/* Engage in seamless conversations */}
                </p>
              </div>

              <div
                className={` flex flex-col items-center justify-center mt-[25px]`}
              >
                <div className=" relative translate-y-[2px] w-[95%]">
                  <Image objectFit="content" fill src={recMobi} />
                </div>
                <p className="z-[99] text-white text-center text-[15px] absolute">
                  {t("friendifyCanHelp.titleCardRigh3")}
                  {/* Receive personalized suggestions */}
                </p>
              </div>

              <div
                className={` flex flex-col items-center justify-center mt-[25px]`}
              >
                <div className=" relative translate-y-[2px] w-[95%]">
                  <Image objectFit="content" fill src={recMobi} />
                </div>
                <p className="z-[99] text-white text-center text-[15px] absolute">
                  {t("friendifyCanHelp.titleCardleft2")}
                  {/* Assistance with any of your work */}
                </p>
              </div>

              <div
                className={` flex flex-col items-center justify-center mt-[25px]`}
              >
                <div className=" relative translate-y-[2px] w-[95%]">
                  <Image objectFit="content" fill src={recMobi} />
                </div>
                <p className="z-[99] text-white text-center text-[15px] absolute">
                  {t("friendifyCanHelp.titleCardleft1")}
                  {/* Assistance with any of your work */}
                </p>
              </div>
              {/*   

            <button
              type="button"
              class=" text-center shadow-box w-[250px] h-[34px]  mt-[-150px] text-[22px] md:text-[28px] font-bold leading-normal text-white rounded-[40.0783px] hover:bg-success-600 bg-[#2D642D] hover:bg-[#245024] shadow-md">
              Explore More
            </button> */}
            </div>
          </AnimationOnScroll>
        </div>
      </CustomSection>
    </div>
  );
};

export default FriendifyHelp;
