import android_icon from '@/assets/hero/dowload/android.png';
import appstore_icon from '@/assets/hero/dowload/appstore.png';
import chplay_icon from '@/assets/hero/dowload/googleplay.png';
import iconWebApp from '@/assets/hero/dowload/iconWebApp.png';
import iconTryNow from '@/assets/hero/dowload/try.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CustomSection from '../common/Section';

import BigCircleImage from '@/assets/home/bigCircle.png';
import ImageRight from '@/assets/home/imageRight3.png';

const HeroFriendify = () => {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div
        class="hidden md:block pt-[50px]"
        style={{ backgroundImage: 'linear-gradient(4deg, #161515, transparent)' }}
      >
        <CustomSection>
          <div class="w-[100%] h-full md:h-[100%] flex items-center justify-between custom_container m-auto ">
            <div class="w-[40%]">
              <h1 class="font_Montserrat text-white  md:text-[40px] lg:text-[50px] xl:text-[65px]  font-black leading-[110%] mb-[15px]">
                {t("friendifyhero.hero_title")}

              </h1>
              <p className="text-white w-[100%] font-normal lg:text-[18px] md:text-[14px] xl:text-[23px] tracking-[1px]">
                {t("friendifyhero.hero_subtitle")}

              </p>
              {/* <p className='text-white text-[16px] font-bold pt-[30px] ml-[35px]'>
                {t("friendifyhero.hero_content")}

              </p> */}
              <a href="https://app.friendify.ai/login" target="_blank">
                <div className=" hover:scale-[1.01] w-[80px] sm:w-[100px] md:w-[263px] lg:w-[390px] xl:w-[423px] mt-[40px]">
                  <Image src={iconTryNow} />
                </div>
              </a>
              <div className="ml-2 dowload_group flex items-center justify-start gap-[10px] mt-[20px] md:mt-[5px]">
                <a href='https://play.google.com/store/apps/details?id=friendify.playground' target="_blank">
                  <div className="button_3d_dowload hover:scale-[1.01] relative  w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px]">
                    <Image src={chplay_icon} />
                  </div>
                </a>
                <a href='https://apps.apple.com/vn/app/friendify-ai-chat/id6446274776?l=vi' target="_blank">
                  <div className="animate__bounce hover:scale-[1.01] relative  w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px]">
                    <Image src={appstore_icon} fill objectFit="content" />
                  </div>
                </a>
                {/* <div className=" relative  w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px]">
                  <Image src={iconWebApp} />
                </div> */}

              </div>
            </div>

            <div class="">
              <div className="w-[100%]">
                <Image fill style={{ objectFit: 'contain' }} src={ImageRight} />
              </div>
            </div>
          </div>
        </CustomSection>
      </div>

      <div class="md:hidden text-center pt-10 ">
        <CustomSection>
          <div class="flex flex-col text-white justify-center items-center ">
            <p class="font_Montserrat text-[35px] sm:text-[50px] font-semibold">
              {t("friendifyhero.hero_title")}
            </p>
            <div className="pt-10">
              <Image fill style={{ objectFit: 'contain' }} src={ImageRight} />
            </div>
            <p class="text-[14px] font-normal mb-[40px]">
              {t("friendifyhero.hero_subtitle")}
            </p>

            <div className=' flex flex-col justify-center items-center'>
              <div className="pt-5 w-[60%]">
                <a href='https://play.google.com/store/apps/details?id=friendify.playground' target="_blank">
                  <Image fill style={{ objectFit: 'contain' }} src={chplay_icon} />
                </a>
              </div>
              <div className="pt-5 w-[60%]">
                <a href='https://apps.apple.com/vn/app/friendify-ai-chat/id6446274776?l=vi' target="_blank">
                  <Image fill style={{ objectFit: 'contain' }} src={appstore_icon} />
                </a>
              </div>

              <div className="hover:scale-[1.01] pt-5 w-[60%]">
                <a href="#" >
                  <Image fill style={{ objectFit: 'contain' }} src={iconWebApp} />
                </a>
              </div>

            </div>
            {/* <div className="pt-5 w-[60%]">
              <Image fill style={{ objectFit: 'contain' }} layout="fill" src={appstore_icon} />
            </div>
            <div className="pt-5 w-[60%]">
              <Image fill style={{ objectFit: 'contain' }} layout="fill" src={iconWebApp} />
            </div> */}
          </div>
        </CustomSection>
      </div>
    </>
  );
};

export default HeroFriendify;
