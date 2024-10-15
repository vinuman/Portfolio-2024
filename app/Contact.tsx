import React from "react";
import { FcCellPhone, FcFeedback } from "react-icons/fc";
import Navbar from "./components/Navbar";

interface ContactProps {
  scrollToHome?: () => void;
}

const Contact: React.FC<ContactProps> = ({ scrollToHome }) => {
  return (
    <>
      <div className=" bg-[#1f2733] lg:px-[165px] md:px-[80px] px-[40px] md:py-[80px] py-[20px] flex flex-col md:flex-row items-center md:justify-between justify-around lg:min-h-[500px] min-h-[400px] mx-auto max-w-[1280px]">
        <div className=" md:w-[40%]]">
          <h1 className=" md:text-heading-m lg:text-heading-xl text-heading-l text-slate-200 font-bold mb-[20px] text-center md:text-left">
            Contact
          </h1>
          <p className=" text-slate-200 md:text-body-l text-[14px] w-[100%] lg:w-[60%] text-center md:text-left">
            I would love to hear about your project and how I could help. Please
            do reach out, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="md:w-[40%]  flex flex-col gap-8">
          <div className=" flex items-center gap-4 h-[48px]">
            <FcCellPhone size={50} />
            <p className="text-slate-200 lg:text-heading-m md:text-[18px] text-[14px]">
              +91 7560924678
            </p>
          </div>
          <div className=" flex items-center gap-4 h-[48px]">
            <FcFeedback size={50} />
            <p className="text-slate-200 lg:text-heading-m md:text-[18px] text-[14px]">
              vinucyril@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1f2733] lg:px-[165px] md:px-[100px] px-[40px] py-[20px] border-t border-gray-300 ">
        <Navbar scrollToHome={scrollToHome} />
      </div>
    </>
  );
};

export default Contact;
