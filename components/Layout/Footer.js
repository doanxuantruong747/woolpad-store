//import logo from "@/assets/footer/logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ListFoodter from "../common/ListFoodter";
import Image from "next/image";

const snsData = [
  {
    icon: "fb",
    to: "https://www.facebook.com/profile.php?id=100092633490541&mibextid=LQQJ4d",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
  },
  {
    icon: "ins",
    to: "",
    src: "https://w7.pngwing.com/pngs/419/180/png-transparent-tiktok-icon-white-hd-logo.png"
  },
  {
    icon: "intergram",
    to: "",
    src: "https://w7.pngwing.com/pngs/16/46/png-transparent-made-in-kings-heath-instagram-facebook-female-graphy-instagram-logo-instagram-icon-text-trademark-magenta.png"
  },

];

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

      <div className=" flex items-center md:justify-between justify-center md:flex-row flex-col">

        <p className="text-[#be1c1cda] mt-5 md:text-[18px] text-[16px] text-center font-semibold">HotLine: 0328.488.081 hoặc 0903.090.891</p>

        <div className=" flex md:pt-0 pt-[5%] ">
          {snsData.map((item, index) => (
            <div key={index} className="px-[5px] cursor-pointer">
              <a href={item.to} target="_blank">
                <Image alt="content img" src={item.src} fill style={{ objectFit: "contain" }} height="40" width="40" />
              </a>
            </div>

          ))}
        </div>


      </div>
      <p className="text-[#7a7878da] text-[12px] mt-5 text-center">Copyright © 2023 Đoàn Xuân Trường</p>

      {/* <div className=" hidden lg:block">

      </div>

      <div className=" lg:hidden flex justify-center">

      </div> */}
    </div>
  );
};

export default Footer;
