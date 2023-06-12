import Image from "next/image";
import { useRouter } from "next/router";


const Card = ({ src, title, subTitle }) => {
  const router = useRouter();
  return (
    <div className='container_card '>
      <div className=" flex flex-col justify-center w-full">
        <div className='w-[100%] px-[10%]'>
          <Image fill style={{ objectFit: 'contain' }} src={src} />
        </div>
        <div className=' flex text-center flex-col'>
          <p className=" xl:text-[35px] lg:text-[30px] md:text-[25px] text-[20px] text-[#000000] font-semibold px-3">{title}</p>
          <p className=" xl:text-[18px] lg:text-[16px] text-[14px] text-[#8b8989] font-normal px-[10%] pb-[4%]">{subTitle}</p>
          <button onClick={() => { router.push('/tivi') }}
            type="button"
            class="pb-[5%] button_rotate_animation text-center shadow-box  w-[125px] h-[40px] text-[16px] font-normal leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 bg-[#000] hover:bg-[#2c2b2b] shadow-md"
          >
            Xem Thêm
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
