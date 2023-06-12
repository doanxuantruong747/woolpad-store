import detail1 from '@/assets/tivipage/detail1-1.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";



const HeroHompage = () => {

  const pagination = {
    clickable: true,
  };
  const router = useRouter();
  const slideData = [
    {
      src: detail1,
      name: "WOOLPAD",
      title: "Ti Vi OLED",
      subTitle: "Hình ảnh chân thực như cuộc sống"
    },
    // {
    //   src: hinh1,
    //   name: "WOOLPAD",
    //   title: "Ti Vi OLED",
    //   subTitle: "Hình ảnh chân thực như cuộc sống"
    // },

  ];
  const slideDataMobi = [
    {
      src: detail1,
      name: "WOOLPAD",
      title: "Ti Vi OLED",
      subTitle: "Hình ảnh chân thực như cuộc sống"
    },
    // {
    //   src: hinh2Mobi,
    //   name: "WOOLPAD",
    //   title: "Ti Vi OLED",
    //   subTitle: "Hình ảnh chân thực như cuộc sống"
    // },


  ];


  return (
    <>
      <div className="overflow-hidden pt-[80px] w-full custom_container ">
        <div className='container-hero hidden lg:block'>
          <Swiper
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[98%]"
            spaceBetween={1}
            effect={"fade"}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
          >
            {slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-[50px] flex justify-around">
                  <div >
                    <Image
                      alt="content img"
                      src={item.src}
                      fill
                      style={{ objectFit: "contain" }}
                      height='550px'
                      width='650px'
                    />
                  </div>
                  <div className='mt-[10%]'>
                    <p className='2xl:text-[45px] xl:text-[38px] text-[27px] font-bold text-[#000]'>{item.name}
                      <span className='ml-[15px] 2xl:text-[40px] xl:text-[30px] text-[25px] font-normal text-[#000]'>{item.title}</span>
                    </p>
                    <p className='2xl:text-[35px] xl:text-[28px] text-[18px] font-semibold'>{item.subTitle}</p>
                    <button onClick={() => { router.push('/tivi') }}
                      type="button"
                      class="button_rotate_animation text-center shadow-box w-[140px] h-[50px] mt-[20px] text-[18px] leading-normal text-[#ffff] font-normal rounded-[40.0783px] hover:bg-success-600 bg-[#131212] hover:bg-[#111111] shadow-md"
                    >
                      Xem Thêm
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='container-hero lg:hidden block'>
          <Swiper
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[98%]"
            spaceBetween={1}
            effect={"fade"}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
          >
            {slideDataMobi.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-[35px] flex justify-center items-center flex-col">


                  <p className='lg:text-[35px] md:text-[30px] sm:text-[28px] text-[24px]  font-bold text-[#000]'>{item.name}
                    <span className='ml-[15px] lg:text-[30px] md:text-[30px] sm:text-[26px] text-[20px]  font-normal text-[#000]'>{item.title}</span>
                  </p>
                  <p className='lg:text-[25px] md:text-[20px] sm:text-[18px] text:[16px] font-semibold mt-5'>{item.subTitle}</p>

                  <div className='mt-[25px]'>
                    <Image
                      alt="content img"
                      src={item.src}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <button onClick={() => { router.push('/tivi') }}
                    type="button"
                    class="button_rotate_animation text-center shadow-box w-[130px] h-[40px] text-[18px] font-normal leading-normal text-[#ffff] rounded-[40.0783px] hover:bg-success-600 bg-[#131212] hover:bg-[#111111] shadow-md"
                  >
                    Xem Thêm
                  </button>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroHompage;
