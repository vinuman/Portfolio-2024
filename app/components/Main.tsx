import React from "react";
import Image from "next/image";
import profile from "@/app/assets/PortfolioDP.png";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="flex w-full mt-[80px]">
        <div className="flex flex-col gap-[20px] w-[70%]">
          <h1 className="text-heading-xl font-extrabold text-white">
            Nice to meet you!<br></br>I&apos;m{" "}
            <span className=" border-b-8 border-primary-200">
              {" "}
              Vinu Cyril<span className=" text-primary-200">.</span>
            </span>
          </h1>
          <p className=" text-body-l text-white mt-[20px]">
            Based in Bangalore, I&apos;m a front-end developer<br></br>{" "}
            passionate about building accessible web apps<br></br> that users
            love.
          </p>
          <div className="flex items-center gap-[20px]">
            <Button text="contact me" />
            <Button text="Resume" />
          </div>
        </div>
        <div className=" w-[30%] border-4 border-primary-200 rounded-md min-w-[300px]">
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
