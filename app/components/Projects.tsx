"use client";
import React, { useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import bg1 from "@/app/assets/bg1.jpg";
import bg2 from "@/app/assets/bg2.jpg";
import bullbear1 from "@/app/assets/bullbear_cover1.png";
import bullbear2 from "@/app/assets/bullbear_cover2.png";

const Projects = () => {
  const [work, setWork] = useState(true);
  return (
    <>
      <div className=" mt-[120px]">
        <div className={`flex items-center gap-[100px]`}>
          <h1
            onClick={() => setWork(true)}
            className={`text-white   font-bold cursor-pointer ${
              work
                ? "border-b-8 border-primary-200 text-heading-xl"
                : " text-heading-l"
            }`}
          >
            Work
          </h1>
          <h2
            onClick={() => setWork(false)}
            className={`text-white font-bold cursor-pointer ${
              !work
                ? "border-b-8 border-primary-200 text-heading-xl"
                : "text-heading-l"
            }`}
          >
            Projects
          </h2>
        </div>
        {/*  PROJECT DISPLAY DIV BEGINS */}
        <div className=" mt-[40px]">
          <ProjectDisplay
            bgImage={bg2}
            projectImage1={bullbear1}
            projectImage2={bullbear2}
            title="BullBear Alpha"
            techArray={["Next JS", "TypeScript", "GraphQL API", "Tailwind-css"]}
          />
        </div>

        {/*  PROJECT DISPLAY DIV ENDS */}
      </div>
    </>
  );
};

export default Projects;
