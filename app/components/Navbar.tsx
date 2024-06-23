import React from "react";
import Image from "next/image";
import github from "@/app/assets/github.svg";
import frontendmentor from "@/app/assets/frontendmentor.svg";
import linkedin from "@/app/assets/LinkedIn.svg";

const Navbar = () => {
  return (
    <>
      <div className=" max-w-[1110px] mx-auto flex items-center justify-between w-full pb-[10px]">
        <p className=" text-white font-bold text-[32px]">
          Vinu Cyril<span className=" text-primary-200">.</span>
        </p>
        <div className="flex justify-between w-[180px]">
          <a
            href={`https://github.com/vinuman`}
            target="_blank"
            className=" cursor-pointer  w-8 h-8"
          >
            <Image width={100} height={100} src={github} alt="icon" />
          </a>
          <a
            href={`https://www.frontendmentor.io/profile/vinuman`}
            target="_blank"
            className=" cursor-pointer w-8 h-8"
          >
            <Image width={100} height={100} src={frontendmentor} alt="icon" />
          </a>
          <a
            href={`https://www.linkedin.com/in/vinu-cyril-a3936b154/`}
            target="_blank"
            className=" cursor-pointer w-8 h-8"
          >
            <Image width={100} height={100} src={linkedin} alt="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
