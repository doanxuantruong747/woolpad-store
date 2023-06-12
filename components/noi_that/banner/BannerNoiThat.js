import ghe11 from '@/assets/banner-noithat/ghe11.jpg';
import ban4 from '@/assets/banner-noithat/ban4.jpg';
import tu1 from '@/assets/banner-noithat/tu1.jpg';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from './Slide';



const BannerNoiThat = () => {

  const pagination = {
    clickable: true,
  };

  const slideData = [
    {
      src: ghe11,
      name: "Sofa Giường",
      title: "Phong Cách Châu Âu Hiện Đại",
      subTitle: "",
      to: "/noi-that"
    },
    {
      src: ban4,
      name: "Bàn Phòng Khách",
      title: "Phong Cách Hiện Đại, Cổng Usb tiện lợi",
      subTitle: "",
      to: "/noi-that"
    },
    {
      src: tu1,
      name: "Tủ Phòng Khách ",
      title: "Phong Cách Châu Âu ",
      subTitle: "",
      to: "/noi-that"
    },

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
                <Slide src={item.src}
                  name={item.name}
                  title={item.title}
                  to />
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
            {/* {slideDataMobi.map((item, index) => (
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
                  <a href='/tivi'>
                    <button
                      type="button"
                      class="button_rotate_animation text-center shadow-box w-[130px] h-[40px] text-[18px] font-normal leading-normal text-[#ffff] rounded-[40.0783px] hover:bg-success-600 bg-[#131212] hover:bg-[#111111] shadow-md"
                    >
                      Xem Thêm
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BannerNoiThat;
