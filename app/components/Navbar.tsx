import React from "react";
import Image from "next/image";
import github from "@/app/assets/github.svg";
import frontendmentor from "@/app/assets/frontendmentor.svg";
import linkedin from "@/app/assets/LinkedIn.svg";

const Navbar = () => {
  return (
    <>
      <div className="  mx-auto flex items-center justify-between w-full md:pb-[10px] max-w-[1280px]">
        <p className=" text-white font-bold text-[32px] hidden sm:block">
          Vinu Cyril<span className=" text-primary-200">.</span>
        </p>
        <div className="flex justify-between sm:w-[180px] w-full">
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
