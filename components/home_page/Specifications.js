import Image from "next/image";
import { useTranslation } from "react-i18next";

// card icon

import CustomSection from "../common/Section";

import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const listData = [
  {
    title: "Frame & Fork",
    subTitle: "6061 Aluminum with T6 heat treating with smooth welding and kickstand"
  },
  {
    title: "Battery Range",
    subTitle: "Up to 90km Range of Pedal Assistance"
  },
  {
    title: "Motor",
    subTitle: "95RX: 36v 250W with 5 Power Levels"
  },
  {
    title: "Brakes",
    subTitle: "Hydraulic Disc Brake Set"
  },
  {
    title: "Battery",
    subTitle: "17.5Ah Battery"
  },
  {
    title: "Drive System",
    subTitle: "55T/22T- Belt Drive"
  },
  {
    title: "Handlebars",
    subTitle: "Modmo handlebars with a digital display featuring: speedometer, distance travelled, trip and battery level"
  },
  {
    title: "Tires",
    subTitle: "Kenda 700c x 40 with K-Shield puncture protection"
  },
  {
    title: "Wheels",
    subTitle: "6061 Aluminium"
  },
]

const Specifications = () => {
  const { i18n, t } = useTranslation();
  const [hidden, setHidden] = useState(false)

  const handleClick = () => {
    setHidden(!hidden)
  }
  return (
    <div className="lg:pb-[80px] md:pb[120px] pb-[150px] ">
      <CustomSection title="SPECIFICATIONS" classTitle="text-[37px] font-bold text-[#02B6FF] text-centen">
        <div className="shadow-box w-full p-[15px] mt-[40px]">
          <p className="text-[#000] text-[16px] font-semibold my-[15px]">Saigon+ Specifications</p>
          <div className="h-[1px]  bg-black-100 mt-[15px] mb-[15px]" />
          {hidden
            ? (<div>
              {listData.slice(5).map((item, index) => (
                <div className=" flex flex-row pt-[3%] w-full">
                  <p className="text-[#000] text-[16px] font-semibold w-[30%]">{item.title}</p>
                  <p className="text-[#525050] text-[16px] md:text-left text-right w-[70%]">{item.subTitle}</p>
                </div>
              ))}
            </div>)
            : (<div>
              {listData.map((item, index) => (
                <div className=" flex flex-row pt-[3%] w-full">
                  <p className="text-[#000] text-[16px] font-semibold w-[30%] ">{item.title}</p>
                  <p className="text-[#525050] md:text-[16px] text-[14px] md:text-left text-right w-[70%]">{item.subTitle}</p>
                </div>
              ))}
            </div>)
          }

          {hidden
            ? (<p className=" underline text-[#000] text-center font-semibold text-[16px] cursor-pointer"
              onClick={handleClick}
            >Show less</p>)
            : (<p className=" underline text-[#000] text-center font-semibold text-[16px] cursor-pointer"
              onClick={handleClick}
            >Hidden less</p>)
          }

        </div>

      </CustomSection>
    </div>
  );
};

export default Specifications;
