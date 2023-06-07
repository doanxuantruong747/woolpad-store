import Image from "next/image";
import img_left from "../assets/register/contetn_app.png";
import { useTranslation } from "react-i18next";
import icon from "../assets/register/btn-register.png";

const Register = () => {
  const { i18n, t } = useTranslation();

  console.log("value :", i18n.language);

  return (
    <div className="relative w-100% h-[100vh] max-[380px]:h-[112vh] max-[370px]:h-[100vh] flex justify-center overflow-hidden">
      <div className="w-[80%] h-[100%] flex xl:flex-row flex-col items-center relative">
        <div className=" lg:w-[50%] 2xl:scale-[1] 2xl:w-[40%] lg:scale-[0.8] xl:top-[15%] 2xl:top-[19%] lg:top-0 lg:left-[-4%] md:w-[80%] w-[100%] z-10 lg:absolute">
          <Image src={img_left} alt="img" />
        </div>
        <div className=" bg-bg-register 2xl:w-[56%] xl:w-[60%] w-[95%] bg-cover bg-no-repeat z-0 2xl:h-[75%] h-[45%] xl:h-[55%] lg:left-[36%] lg:top-[29%]  rounded-[20px] relative 2xl:top-[10%] 2xl:left-[37%] xl:left-[45%] xl:top-[13%] ">
          <div className="flex flex-col items-start justify-center lg:w-[65%] 2xl:w-[80%]  w-[90%] absolute xl:top-[6%] xl:left-[6%] top-[3%] left-[5%]   ">
            <p className="2xl:font-bold 2xl:text-[32px] xl:text-[30px] font-Montserrat 2xl:leading-[39px] text-[#0085FF] 2xl:mb-[12px] ">
              {t("register.title")}
            </p>
            <p className="2xl:font-bold 2xl:text-[48px] xl:text-[30px] font-Montserrat 2xl:leading-[59px] text-[#0085FF] ">
              {t("register.Expert-T")}
            </p>
            <p className="2xl:font-bold 2xl:text-[48px] xl:text-[30px] font-Montserrat 2xl:leading-[59px] text-[#0085FF] 2xl:mb-[18px] ">
              {t("register.partner")}
            </p>
            <span className="2xl:font-medium 2xl:text-[24px] text-[13px] max-[380px]:text-[10px] font-Montserrat 2xl:leading-[29px] 2xl:mb-[49px] ">
              {t("register.content-first")}
            </span>
            <span className="2xl:font-medium 2xl:text-[24px] text-[13px] max-[380px]:text-[10px] font-Montserrat 2xl:leading-[29px] 2xl:mb-[22px] xl:mb-[30px]">
              {t("register.content-second")}
            </span>
            {/* <div
              className={` ${
                i18n.language !== "vi" ? "lg:w-[42%]" : "lg:w-[48%]"
              }  ${
                i18n.language !== "vi"
                  ? "max-[380px]:w-[42%]"
                  : "max-[380px]:w-[60%]"
              } ${i18n.language !== "vi" ? "md:w-[32%]" : "md:w-[40%]"} 
              ${i18n.language !== "vi" ? "w-[52%]" : "w-[73%]"} 
               w-[52%] md:w-[32%] max-[380px]:w-[42%] max-[380px]:h-[3vh]  bg-blue-200 rounded-2xl bg-no-repeat text-[19px] 2xl:h-[8vh] h-[4vh] uppercase justify-center items-center flex 2xl:text-[32px]`}
            >
              <p className="text-[#FFFFFF] cursor-pointer font-Montserrat font-bold max-[380px]:text-[10px]">
                {t("register.btn-register")}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
