import Image from 'next/image';
import React from 'react';
import card1 from '@/assets/friendifyPage/friendifyHelp/cardItemOur1.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CardItem from './CardItem';
import { useTranslation } from 'react-i18next';


const CardItemOur1 = () => {
  const { i18n, t } = useTranslation();
  const title = t("friendifyVision.textCard1")
  return (
    <CardItem
      src={card1}
      title={title}
    />
  );
};

export default CardItemOur1;
