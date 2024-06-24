"use client";

import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

interface DisplayProps {
  bgImage: StaticImageData | string;
  title: string;
  projectImage1: StaticImageData | string;
  projectImage2: StaticImageData | string;
  techArray: string[];
  description: string[];
  link?: string;
  isDepolyed?: boolean;
}

const ProjectDisplay: React.FC<DisplayProps> = ({
  bgImage,
  title,
  projectImage1,
  projectImage2,
  techArray,
  description,
  link,
  isDepolyed,
}) => {
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [isShowMore, setIsShowMore] = useState(1);
  const [deployed, setDeployed] = useState(isDepolyed);

  const handlePop = () => {
    if (deployed === false) {
      setDeployed(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (deployed === true) setDeployed(false);
    }, 2000);
  }, [deployed]);

  return (
    <div className="flex flex-col">
      <a onClick={() => handlePop()} href={link} target="_blank">
        <div className=" h-[400px] w-[100%] relative border border-primary-200 cursor-pointer overflow-hidden max-w-[540px]">
          <Image
            className=" object-cover h-full"
            src={bgImage}
            alt={`Background image`}
          />
          <div
            onMouseOver={() => setFocused1(true)}
            onMouseOut={() => setFocused1(false)}
            className={` h-[100%] absolute top-12 left-4 z-10 transition-all duration-300 ${
              focused1 ? "w-[80%]" : "w-[60%]"
            }`}
          >
            <Image
              height={1000}
              className=" object-cover"
              src={projectImage1}
              alt={`Background image`}
            />
          </div>
          <div
            onMouseOver={() => setFocused2(true)}
            onMouseOut={() => setFocused2(false)}
            className={`h-[100%] absolute top-4 right-4 transition-all duration-300 ${
              focused2 ? "w-[80%] z-20" : "w-[60%]"
            }`}
          >
            <Image
              height={1000}
              className=" object-cover"
              src={projectImage2}
              alt={`Background image`}
            />
          </div>
          <div
            className={`absolute  w-[300px] flex items-center justify-center h-[48px] text-secondary-100 bg-primary-200 text-heading-m z-50 transition-all duration-400 font-bold ${
              deployed ? "opacity-100 top-2 right-2" : "opacity-0 top-0 right-2"
            }`}
          >
            Yet to be deployed!
          </div>
        </div>
      </a>
      <h3 className=" text-white text-heading-m mt-4 border-b-4 border-primary-200 w-[200px]  mb-[20px]">
        {title}
      </h3>
      <p className="text-white w-[100%] max-w-[540px] mb-[10px] text-[18px]">
        Key Contributions:
      </p>
      {description.slice(0, isShowMore).map((desc, index) => (
        <li
          className=" marker:text-primary-200 text-white w-[100%] max-w-[540px]"
          key={index}
        >
          {desc}
        </li>
      ))}
      {isShowMore === 1 && (
        <span
          onClick={() => setIsShowMore(10000)}
          className=" border-b border-primary-200 cursor-pointer text-white mb-[10px] w-[100px]"
        >
          read more...
        </span>
      )}
      {isShowMore !== 1 && (
        <span
          onClick={() => setIsShowMore(1)}
          className=" border-b border-primary-200 cursor-pointer text-white mb-[10px] w-[100px]"
        >
          {" "}
          read less...
        </span>
      )}

      <div className=" flex gap-4 flex-wrap w-[100%] mt-[10px]">
        {techArray.map((item, index) => (
          <div
            key={index}
            className=" bg-primary-200 text-secondary-100 p-1 rounded-md text-[14px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
