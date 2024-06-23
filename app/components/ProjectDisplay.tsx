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
}

const ProjectDisplay: React.FC<DisplayProps> = ({
  bgImage,
  title,
  projectImage1,
  projectImage2,
  techArray,
}) => {
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  return (
    <>
      <div className=" h-[400px] w-[40%] relative border border-primary-200">
        <Image
          className=" object-cover h-full"
          src={bgImage}
          alt={`Background image`}
          objectFit="cover"
        />
        <div
          onMouseOver={() => setFocused1(true)}
          onMouseOut={() => setFocused1(false)}
          className={` h-[100%] absolute top-16 left-4 z-10 ${
            focused1 ? "w-[80%]" : "w-[60%]"
          }`}
        >
          <Image
            height={1000}
            className=" object-cover"
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
      <h3 className=" text-white text-heading-m mt-4">{title}</h3>
      <div className=" flex gap-4 flex-wrap w-[40%]">
        {techArray.map((item, index) => (
          <div
            key={index}
            className=" bg-primary-200 text-secondary-100 px-4 py-2 rounded-md text-[14px]"
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectDisplay;
