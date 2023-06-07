import React from 'react';
import TextAndImage from '../common/TextAndImage';
import Image1 from "@/assets/transaction/transaction1.png";
import Image2 from "@/assets/transaction/laptopImage.png";
import WalletMeImage from "@/assets/Walletne2.png";
import BackgroundImage from "@/assets/transaction/background_image.png";

import TransactionContent from './TransactionContent';
import TransactionContent2 from './TransactionContent2';
import TransactionContent3 from './TransactionContent3';
import TransactionContent4 from './TransactionContent4';
import Image from 'next/image';

const TransactionExchange = () => {
    return (
        <div className='relative'>
            <div className="absolute bottom-[-1%]  sm:bottom-[-3%] left-0 z-[-1]">
                <div className="relative w-[140px] sm:w-auto">
                    <Image src={WalletMeImage} alt="wallet" />
                </div>
            </div>
            <TextAndImage imageSrc={Image1} contentComponent={<TransactionContent />} contentWidth={50} />
            <TextAndImage imageSrc={Image2} contentComponent={<TransactionContent2 />} contentWidth={50} isReverse />
            <TextAndImage backgroundImage={"transaction-img"} contentComponent={<TransactionContent3 />} contentWidth={50} />
            <TransactionContent4 />
        </div>
    );
};

export default TransactionExchange;