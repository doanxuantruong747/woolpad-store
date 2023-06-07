import Image from 'next/image';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const PhoneCard = ({ imageUrl, text, delay = 0 }) => {
  return (
    <AnimationOnScroll delay={delay} offset={0} animateIn="animate__slideInUp">
      <div className="mt-[30px] sm:mt[0] w-fit m-auto">
        <div className="rotate-[13deg] relative w-[100px] sm:w-[200px] lg:w-[300px] m-auto">
          <Image src={imageUrl} fill style={{ objectFit: 'contain' }} />
          <p className="text_16_400_8080 text-[14px] lg:text-[21px] mt-[20px]">{text}</p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default PhoneCard;
