import Image from 'next/image';
import React from 'react';
import card2 from '@/assets/friendifyPage/friendifyHelp/cardItemOur2.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CardItem from './CardItem';
import { useTranslation } from 'react-i18next';


const CardItemOur2 = () => {
  const { i18n, t } = useTranslation();
  const title = t("friendifyVision.textCard2")
  return (
    <CardItem
      src={card2}
      title={title}
    />
  );
};

export default CardItemOur2;
