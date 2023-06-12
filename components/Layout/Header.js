import Logo from "@/assets/header/logostore.png";
import menubar from "@/assets/nav/menubar.png";
import closeMenubar from "@/assets/nav/closeMenu.png";
import { Header_Height } from "constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useClickOutSide from "../../hooks/useClickOutSide";
import SelectLanguage from "../SelectLanguage";

export const NavData = [
  {
    title: "Tivi Woolpad",
    to: "/tivi",
  },
  {
    title: "Nội Thất",
    to: "/noi-that",
  },


];

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const onClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  const menuRef = useRef(null);
  const menuBarRef = useRef(null);

  useClickOutSide(onClose, menuRef, menuBarRef);

  useEffect(() => {
    const pathName = "/" + router.pathname?.split("/")[1];
    setActiveLink(pathName);
  }, [router.pathname]);
  return (
    <>
      <header
        style={{
          background: `${navBg ? "#fff" : ""} `,
        }}

        className={
          ` h-[${Header_Height}] fixed top-0 w-full bg-black transition-all z-[99999] ` +
          (scrollActive ? "shadow-md pt-0  bg-black" : " ")
        }
      >
        <nav className=" h-full flex lg:justify-normal justify-between items-center custom_container mx-auto px-[18px]  py-3 sm:py-4 w-full ">
          <a href="/" className="">
            <div className="relative col-start-1 col-end-2 flex items-center w-[120px] h-[23px] cursor-pointer">
              <Image
                src={Logo}
                fill
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>

          <ul className="hidden pl-[25px] lg:flex  text-[#000]  font-medium items-center justify-between ">
            {NavData?.map((item, index) => {
              return (
                <div
                  key={`link-${index}`}
                  href={item.to}
                  onClick={() => router.push(item.to)}
                  className={`text-[14px] text-left mx-3 cursor-pointer animation-hover inline-block relative text-[#000] hover-item-header ${activeLink === item.to
                    ? " nav_link_active font-semibold"
                    : ""
                    }`}
                >
                  {item.title}

                </div>
              );
            })}

          </ul>

          <div
            ref={menuRef}
            className="  relative lg:hidden flex justify-items-end"
          >{open === false
            ? (<Image
              onClick={() => {
                setOpen(!open);
              }}
              className="cursor-pointer change_color"
              src={menubar}
              height="20px"
              width="23px"
            />)
            : (<Image
              onClick={() => {
                setOpen(!open);
              }}
              className="cursor-pointer change_color"
              src={closeMenubar}
              height="20px"
              width="20px"
            />)
            }

            <nav
              className={`${open ? "navbar-open" : "navbar-close"
                } lg:hidden navbar w-full mt-[45px] fixed z-[9999999999] bg-[#ffff] top-0 right-0 h-screen shadow `}
            >
              <ul className="list-none text-left ">
                {NavData?.map((item, index) => {
                  return (
                    <a key={`link-responsive-${index}`} href={item.to}>
                      <p
                        className={
                          "text-[14px] px-4 py-2 mx-4 my-2 cursor-pointer relative font-medium hover:font-bold text-[#000] "
                        }
                      >
                        {item.title}
                      </p>
                      <div className=" h-[1px] w-[100%]  bg-[#88878722]"></div>
                    </a>
                  );
                })}
              </ul>

            </nav>
          </div>
        </nav>
      </header>
      <div></div>
    </>
  );
};

export default Header;
