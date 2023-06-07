import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import down from "../assets/register/down.png";
import { AiOutlineDownload } from "react-icons/ai";

const StepRegister = () => {
  const { i18n, t } = useTranslation();

  return (
    <div
      className={` ${
        i18n.language !== "vi"
          ? "max-[380px]:h-[80vh]"
          : "max-[380px]:h-[100vh]"
      } "w-full h-[85vh] md:h-[80vh] lg:h-[100vh] max-[380px]:h-[80vh] 2xl:bg-bg-stepRegister  2xl:h-[130vh] bg-no-repeat relative bg-cover"`}
    >
      <div className="2xl:w-[60%] absolute 2xl:top-[11%] md:top-[10%] top-[9%] w-[90%] left-[5%] 2xl:left-0 xl:left-[10%] md:left-[13%] md:w-[77%] md:justify-center ">
        <p className="font-Montserrat 2xl:text-[35px] 2xl:font-bold 2xl:leading-[59px] 2xl:ml-[120px] 2xl:mb-[25px] 2xl:text-start text-center lg:text-[24px] md:text-[33px] mb-[20px]">
          {t("step-register.title")}
        </p>
        <a
          href="https://240tdv.bmdapp.store/240_v1.2.14.apk"
          download
          className="font-Montserrat 2xl:text-[35px] 2xl:font-bold 2xl:leading-[49px] bg_download md:text-[33px] mb-[20px] hover:text-[red] cursor-pointer text-white-300 lg:text-[24px]  2xl:w-[710px] 2xl:h-[104px] flex justify-center items-center  "
        >
          {t("step-register.download")}
          <AiOutlineDownload
            src={down}
            alt="img"
            className="2xl:scale-[1.4] 2xl:ml-3 lg:scale-[1] scale-[1.3] ml-1 cursor-pointer"
          />
        </a>
        <div className="bg_fillOut 2xl:w-[945px] 2xl:h-[165px] flex justify-center items-center flex-col 2xl:mb-[40px] 2xl:mt-[40px] mb-[20px]">
          <div
            className={`"2xl:w-[80%] max-[380px]:w-[73%] ${
              i18n.language === "vi" && "w-[80%]"
            } "`}
          >
            <p className="font-Montserrat 2xl:text-[30px] 2xl:font-bold 2xl:leading-[49px] text-[#0085FF] md:text-[20px] text-[12px] ">
              {t("step-register.fillout")}
            </p>
            <div className="2xl:text-[20px] text-[11px] 2xl:leading-[24px] text-[#0085FF] ">
              <li> {t("step-register.step-1")}</li>
              <li> {t("step-register.step-2")}</li>
            </div>
          </div>
        </div>
        <p className="font-Montserrat 2xl:text-[30px] max-[380px]:text-[13px] 2xl:font-bold 2xl:leading-[49px] md:text-[25px] md:mb-[20px] lg:text-[19px]  bg_wait 2xl:w-[775px] 2xl:h-[104px] flex justify-center items-center text-[#0085FF]">
          {t("step-register.waitfor")}
        </p>
      </div>
      <div className=" absolute 2xl:top-[62%] lg:top-[56%] top-[57%] left-[8%] lg:left-[11%] md:top-[65%] md:left-[17%] md:w-[75%] w-[90%] md:flex-col md:text-[35px] 2xl:left-[6%] 2xl:w-[1332px] 2xl:h-[400px] flex 2xl:flex-col 2xl:justify-between flex-col">
        <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] 2xl:text-start text-center lg:text-[24px] font-bold">
          {t("step-register.howToUse")}
        </p>
        <div className="flex 2xl:h-[75%] 2xl:flex-row justify-between flex-col ">
          <div className="flex 2xl:flex-col h-[80%] 2xl:justify-evenly 2xl:w-[50%] md:w-100% flex-col">
            <div className="flex items-center relative md:w-[100%]">
              <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] font-bold xl:text-[31px] 2xl:mr-[61px] lg:text-[20px] text-[30px] ">
                1
              </p>
              <span className="font-Montserrat font-semibold xl:text-[21px] 2xl:static max-[380px]:text-[10px] lg:text-[17px] text-[13px] ml-2 2xl:text-[26px] md:text-[15px] 2xl:leading-[32px] md:absolute 2xl:left-[14%] 2xl:top-[55%] md:left-[8%]">
                {t("step-register.1")}
              </span>
            </div>
            <div className="flex items-center relative  md:w-[100%]">
              <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] font-bold xl:text-[25px] 2xl:mr-[61px] lg:text-[20px] text-[30px]">
                2
              </p>
              <span className="font-Montserrat font-semibold xl:text-[21px] 2xl:static max-[380px]:text-[10px] lg:text-[17px] text-[13px] ml-2 2xl:text-[26px] md:text-[15px] 2xl:leading-[32px] md:absolute 2xl:left-[14%] 2xl:top-[55%] md:left-[8%]">
                {t("step-register.2")}
              </span>
            </div>
            <div className="flex items-center relative md:w-[100%]">
              <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] font-bold xl:text-[25px] 2xl:mr-[61px] lg:text-[20px] text-[30px]">
                3
              </p>
              <span className="font-Montserrat font-semibold xl:text-[21px] 2xl:static max-[380px]:text-[10px] lg:text-[17px] text-[13px] ml-2 2xl:text-[26px] md:text-[15px] 2xl:leading-[32px] md:absolute 2xl:left-[14%] 2xl:top-[55%] md:left-[8%]">
                {t("step-register.3")}
              </span>
            </div>
          </div>
          <div className="flex 2xl:flex-col h-[80%] 2xl:justify-evenly 2xl:w-[45%] md:w-100% flex-col">
            <div className="flex items-center relative md:w-[100%]">
              <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] font-bold xl:text-[25px] 2xl:mr-[61px] lg:text-[20px] text-[30px]">
                4
              </p>
              <span className="font-Montserrat font-semibold xl:text-[21px] 2xl:static max-[380px]:text-[10px] lg:text-[17px] text-[13px] ml-2 2xl:text-[26px] md:text-[15px] 2xl:leading-[32px] md:absolute 2xl:left-[14%] 2xl:top-[55%] md:left-[8%]">
                {t("step-register.4")}
              </span>
            </div>
            <div className="flex items-center relative  md:w-[100%]">
              <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] font-bold xl:text-[25px] 2xl:mr-[61px] lg:text-[20px] text-[30px]">
                5
              </p>
              <span className="font-Montserrat font-semibold xl:text-[21px] 2xl:static max-[380px]:text-[10px] lg:text-[17px] text-[13px] ml-2 2xl:text-[26px] md:text-[15px] 2xl:leading-[32px] md:absolute 2xl:left-[14%] 2xl:top-[55%] md:left-[8%]">
                {t("step-register.5")}
              </span>
            </div>
            <div className="flex items-center relative md:w-[100%]">
              <p className="text-[#0085FF] font-Montserrat 2xl:text-[48px] font-bold xl:text-[25px] 2xl:mr-[61px] lg:text-[20px] text-[30px]">
                6
              </p>
              <span className="font-Montserrat font-semibold xl:text-[21px] 2xl:static max-[380px]:text-[10px] lg:text-[17px] text-[13px] ml-2 2xl:text-[26px] md:text-[15px] 2xl:leading-[32px] md:absolute 2xl:left-[14%] 2xl:top-[55%] md:left-[8%]">
                {t("step-register.6")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepRegister;
