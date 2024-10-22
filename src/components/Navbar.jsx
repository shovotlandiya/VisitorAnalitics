import React, { useEffect, useState } from "react";
import NavbarLogo from "../assets/TwinPeaks.ai_logo_ 133d4a.svg";
import SwiperImg from "../assets/swiper-img.jpg";
import Triangle from "../assets/triangle.png";
import LayerImage from "../assets/LayerImage.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrolled ? "bg-white shadow-lg" : "bg-transparent";
  return (
    <div className="h-screen  bg-cover bg-center ">
      <img className="absolute right-0 " src={Triangle} alt="triangle" />
      <div
        className={`fixed top-0 left-0 w-full p-3 duration-300 z-10  ${navbarClasses} `}
      >
        <div className="container mx-auto px-2 text-white flex justify-between items-center ">
          <div className="text-black text-2xl">
            <a href="/#">
              <img src={NavbarLogo} width={150} height={100} alt="" />
            </a>
          </div>
          <nav>
            <ul className="flex justify-between  ">
              <li className="text-xs sm:text-lg text-text-color duration-300 font-inter hover:text-black">
                <a href="#key">KEY FEATURES</a>
              </li>
              <li className="text-text-color sm:text-lg mx-6 text-xs duration-300 font-inter hover:text-black">
                <a href="#benefits">BENEFITS</a>
              </li>
              <li className="text-text-color sm:text-lg  text-xs duration-300 font-inter hover:text-black">
                <a href="#cases">USE CASES</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row  justify-between items-center gap-5">
        <div>
          <h1 className="text-footerColor text-3xl sm:text-4xl lg:text-6xl pb-2 font-bold">
            VISITOR ANALITICS
          </h1>
          <p className="text-gray text-xl sm:text-2xl lg:text-3xl">
            Revolutionizing Visitor Insights with AI
          </p>
        </div>
        <img className="max-w-lg w-full" src={LayerImage} alt="LayerImage" />
      </div>
    </div>
  );
};

export default Navbar;
