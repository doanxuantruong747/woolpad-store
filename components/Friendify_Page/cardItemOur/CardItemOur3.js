import Image from 'next/image';
import React from 'react';
import card3 from '@/assets/friendifyPage/friendifyHelp/cardItemOur3.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CardItem from './CardItem';
import { useTranslation } from 'react-i18next';



const CardItemOur3 = () => {
  const { i18n, t } = useTranslation();
  const title = t("friendifyVision.textCard3")
  return (
    <CardItem
      src={card3}
      title={title}
    />
  );
};

export default CardItemOur3;
