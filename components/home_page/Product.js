
import { useTranslation } from 'react-i18next';
import Card from './Card';
import card1 from '@/assets/card/card1.png';
import card2 from '@/assets/card/card2.png';



//import ImageRight from '@/assets/home/imageRight3.png';
const dataCard = [
  {
    title: "Tivi Woolpad - Viền Vàng",
    subTitle: "Màn hình 4K, chất lượng hình ảnh 12k. Hình ảnh chân thực như cuộc sống, trải nghiệm tận mắt thắng cảnh",
    src: card1
  },
  {
    title: "Tivi Woolpad - Đen",
    subTitle: "Trải nghiệm chất lượng âm thanh mạnh mẽ khi TV hòa âm cùng soundbar. Âm thanh vòm chuẩn điện ảnh ngay tại nhà",
    src: card2
  },

]

const Product = () => {

  return (
    <div className='custom_container w-full'>
      <div className=' flex flex-wrap justify-center'>
        {dataCard.map((item, index) => (
          <div key={index} className=' px-5 py-5 md:w-[45%] w-full'>
            <Card title={item.title} subTitle={item.subTitle} src={item.src} />
          </div>
        ))}
      </div>


    </div>
  );
};

export default Product;
