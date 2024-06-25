import React from "react";
import Image from "next/image";
import profile from "@/app/assets/PortfolioDP.png";
import Button from "./Button";

interface MainProps {
  scrollToContact: () => void;
}

const Main: React.FC<MainProps> = ({ scrollToContact }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center  md:mt-[80px] mt-[40px] max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-[20px] lg:w-[70%]">
          <h1 className="lg:text-heading-xl md:text-heading-l text-[40px] font-extrabold text-white text-center md:text-left">
            Nice to meet you! I&apos;m{" "}
            <span className=" border-b-8 border-primary-200">
              {" "}
              Vinu Cyril<span className=" text-primary-200">.</span>
            </span>
          </h1>
          <div className=" lg:w-[30%] w-[50%] border-4 border-primary-200 rounded-md lg:min-w-[300px] md:hidden block">
            <Image
              className=" object-cover h-full"
              src={profile}
              alt="profile image"
            />
          </div>
          <p className=" sm:text-body-l text-[14px] text-white text-center md:text-left mt-[20px] mb-[10px] md:mb-0">
            Based in Bangalore, I&apos;m a front-end developer<br></br>{" "}
            passionate about building accessible web apps<br></br> that users
            love.
          </p>
          <div className="flex items-center gap-[20px] mb-[10px] md:mb-0">
            <Button onClick={scrollToContact} text="contact me" />
            <a href="/Vinu_Cyril.pdf" download={true}>
              <Button text="Resume" />
            </a>
          </div>
        </div>
        <div className=" lg:w-[30%] w-[50%] border-4 border-primary-200 rounded-md lg:min-w-[300px] hidden md:block">
          <Image
            className=" object-cover h-full"
            src={profile}
            alt="profile image"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
