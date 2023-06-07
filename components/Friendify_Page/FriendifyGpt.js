import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import CustomSection from '../common/Section';
import imageRigthGpt from '@/assets/friendifyPage/friendifyHelp/imageRigthGpt.png';
import imageRigthGpt_new from '@/assets/friendifyPage/friendifyHelp/img_friendify_gpt_new.png';



const FriendifyGpt = () => {
  const { i18n, t } = useTranslation();
  const title = t("friendifyGPT.title");
  const subTitle = t("friendifyGPT.sub_title")
  return (
    <CustomSection
      title={title}
      subTitle={subTitle}
      classSubTitle="text-[#CFCFCF] font-normal 2xl:text-[24px] xl:text-[19px] text:[18px] text-center 2xl:w-[82%] lg:w-[95%] md:w-full"
    >
      <div className="w-[100%] text-white-300 flex md:flex-row flex-col-reverse ">
        <div className="md:w-[100%] lg:w-[60%] w-full flex justify-center flex-col items-center">
          <p className=" font-medium  2xl:text-[36px] xl:text-[32px] lg:text-[24px] md:text-[20px] text-center 2xl:w-[75%] xl:w-[100%]">
            {t("friendifyGPT.title_left")}
            {/* “So, why not join us on this exciting journey and experience the power of AI with the
            warmth of human connections?” */}
          </p>
          <a href='/services'>


            <button
              type="button"
              class="button_rotate_animation text-center shadow-box w-[200px] h-[40px] mt-[20px] md:mt-[50px] text-[22px] font-bold leading-normal text-white rounded-[40.0783px] hover:bg-success-600 bg-[#2D642D] hover:bg-[#245024] shadow-md"
            >
              {t("friendifyGPT.titleButton")}
            </button>
          </a>
        </div>

        <div className="">
          <div className=" md:w-[90%] w-[70%] md:pl-0 ml-[15%]">
            <Image alt="content img" src={imageRigthGpt} fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default FriendifyGpt;
