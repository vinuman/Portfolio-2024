import React from "react";
import { FcCellPhone, FcFeedback } from "react-icons/fc";
import Navbar from "./components/Navbar";

const Contact = () => {
  return (
    <>
      <div className=" bg-secondary-100 px-[165px] py-[80px] flex items-center justify-between">
        <div className=" w-[40%]">
          <h1 className=" text-heading-xl text-white font-bold mb-[20px]">
            Contact
          </h1>
          <p className=" text-white text-body-l">
            I would love to hear about your project and how I could help. Please
            do reach out, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="w-[40%] flex flex-col gap-8">
          <div className=" flex items-center gap-4 h-[48px]">
            <FcCellPhone size={50} />
            <p className="text-white text-heading-m">+91 7560924678</p>
          </div>
          <div className=" flex items-center gap-4 h-[48px]">
            <FcFeedback size={50} />
            <p className="text-white text-heading-m">vinucyril@gmail.com</p>
          </div>
        </div>
      </div>
      <div className=" bg-secondary-100 px-[165px] py-[20px] border-t border-gray-300">
        <Navbar />
      </div>
    </>
  );
};

export default Contact;
