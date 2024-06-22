import React from "react";
import Image from "next/image";
import github from "@/app/assets/github.svg";
import frontendmentor from "@/app/assets/frontendmentor.svg";
import linkedin from "@/app/assets/LinkedIn.svg";

const Navbar = () => {
  return (
    <>
      <div className=" max-w-[1110px] mx-auto flex items-center justify-between w-full">
        <p className=" text-white font-bold text-[32px]">Vinu Cyril</p>
        <div className="flex justify-between w-[180px]">
          <Image src={github} alt="icon" />
          <Image src={frontendmentor} alt="icon" />
          <Image src={linkedin} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
