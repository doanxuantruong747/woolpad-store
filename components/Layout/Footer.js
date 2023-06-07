//import logo from "@/assets/footer/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as LinkScroll } from "react-scroll";

import fb from "@/assets/footer/snsIcons/fb.png";
import tw from "@/assets/footer/snsIcons/tw.png";
import lk from "@/assets/footer/snsIcons/lk.png";
import ins from "@/assets/footer/snsIcons/ins.png";
// import yt from "@/assets/footer/snsIcons/yt.png";
// import ds from "@/assets/footer/snsIcons/ds.png";
// import tele from "@/assets/footer/snsIcons/tele.png";
const snsData = [
  {
    icon: "tw",
    to: "https://twitter.com/FriendifyGPT",
    src: fb
  },
  {
    icon: "fb",
    to: "https://www.facebook.com/FriendifyGPT",
    src: tw
  },
  {
    icon: "ins",
    to: "https://www.instagram.com/friendify.gpt",
    src: lk
  },

];
import { NavData } from "./Header";
import CustomSection from "../common/Section";
import Collapse from "../common/Collapse";
import ListFoodter from "../common/ListFoodter";
import { TabItem } from "flowbite-react/lib/esm/components/Tab/TabItem";

const listExplore = [
  { title: "Saigon +", src: "" },
  { title: "Saigon SB", src: "" },
  { title: "News", src: "" }
]
const listAbout = [
  { title: "About Us", src: "" },
  { title: "Press", src: "" },
]
const listHelp = [
  { title: "Contact", src: "" },
]

const listData = [
  {
    title: "Explore",
    content: <ListFoodter links={listExplore} />,
  },
  {
    title: "About",
    content: <ListFoodter links={listAbout} />,
  },
  {
    title: "Help",
    content: <ListFoodter links={listHelp} />,
  },
]



const Footer = () => {
  const { i18n, t } = useTranslation();

  const [activeLink, setActiveLink] = useState(null);
  return (

    <div className="custom_container h-[200px] pt-16">

      <div className=" flex flex-col justify-center items-center">
        <div className=" h-[1px] bg-[#beb8b8c5] w-[90%] text-center pl-[10%] pr-[10%]" />
        <p className="text-[#be1c1cda] mt-5 md:text-[24px] text-[18px] text-center font-semibold">HotLine: 0328.488.081 hoặc 0903.090.891</p>
        <p className="text-[#7a7878da] text-[12px] mt-5">Copyright © 2023 Đoàn Xuân Trường</p>
      </div>
      {/* <div className=" hidden lg:block">

      </div>

      <div className=" lg:hidden flex justify-center">

      </div> */}
    </div>
  );
};

export default Footer;
