"use client";

import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface DisplayProps {
  bgImage: StaticImageData | string;
  title: string;
  projectImage1: StaticImageData | string;
  projectImage2: StaticImageData | string;
  techArray: string[];
  description: string[];
  link?: string;
}

const ProjectDisplay: React.FC<DisplayProps> = ({
  bgImage,
  title,
  projectImage1,
  projectImage2,
  techArray,
  description,
  link,
}) => {
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [isShowMore, setIsShowMore] = useState(1);
  return (
    <div className="flex flex-col">
      <a href={link} target="_blank">
        <div className=" h-[400px] w-[100%] relative border border-primary-200 cursor-pointer overflow-hidden max-w-[540px]">
          <Image
            className=" object-cover h-full"
            src={bgImage}
            alt={`Background image`}
            objectFit="cover"
          />
          <div
            onMouseOver={() => setFocused1(true)}
            onMouseOut={() => setFocused1(false)}
            className={` h-[100%] absolute top-12 left-4 z-10 ${
              focused1 ? "w-[80%]" : "w-[60%]"
            }`}
          >
            <Image
              height={1000}
              className=" object-cover border\"
              src={projectImage1}
              alt={`Background image`}
              objectFit="cover"
            />
          </div>
          <div
            onMouseOver={() => setFocused2(true)}
            onMouseOut={() => setFocused2(false)}
            className={`h-[100%] absolute top-4 right-4 ${
              focused2 ? "w-[80%] z-20" : "w-[60%]"
            }`}
          >
            <Image
              height={1000}
              className=" object-cover"
              src={projectImage2}
              alt={`Background image`}
              objectFit="cover"
            />
          </div>
        </div>
      </a>
      <h3 className=" text-white text-heading-m mt-4 border-b-4 border-primary-200 w-[200px]  mb-[10px]">
        {title}
      </h3>
      <p className="text-white w-[100%] max-w-[540px] mb-[20px]">
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
