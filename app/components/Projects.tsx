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
        {/*WORK  PROJECT DISPLAY DIV BEGINS */}
        {work && (
          <div className=" mt-[40px] flex flex-wrap gap-12  w-[100%]">
            <div className=" w-[45%]">
              <ProjectDisplay
                bgImage={bg2}
                projectImage1={bullbear1}
                projectImage2={bullbear2}
                title="BullBear Alpha"
                description={[
                  "GraphQL Integration: Implemented comprehensive GraphQL API integration, enabling efficient data querying and state management.",
                  "UI Development: Achieved 100% accuracy in translating Figma designs to the live application, maintaining design integrity and providing a seamless user experience.",
                  "Custom Search Functionality: Developed and deployed a robust custom search feature, enhancing the application's usability and performance.",
                  "GraphQL Mutations: Integrated GraphQL mutations to facilitate seamless message sending capabilities, improving user interaction and communication within the app.",
                ]}
                techArray={[
                  "Next JS",
                  "TypeScript",
                  "GraphQL API",
                  "Tailwind-css",
                ]}
                link="https://www.bullbearalpha.com/"
              />{" "}
            </div>
            <div className="w-[45%]">
              <ProjectDisplay
                bgImage={bg2}
                projectImage1={bullbear1}
                projectImage2={bullbear2}
                title="BullBear Alpha"
                description={[
                  "GraphQL Integration: Implemented comprehensive GraphQL API integration, enabling efficient data querying and state management.",
                  "UI Development: Achieved 100% accuracy in translating Figma designs to the live application, maintaining design integrity and providing a seamless user experience.",
                  "Custom Search Functionality: Developed and deployed a robust custom search feature, enhancing the application's usability and performance.",
                  "GraphQL Mutations: Integrated GraphQL mutations to facilitate seamless message sending capabilities, improving user interaction and communication within the app.",
                ]}
                techArray={[
                  "Next JS",
                  "TypeScript",
                  "GraphQL API",
                  "Tailwind-css",
                ]}
                link="https://www.bullbearalpha.com/"
              />
            </div>
            <div className="w-[45%]">
              <ProjectDisplay
                bgImage={bg2}
                projectImage1={bullbear1}
                projectImage2={bullbear2}
                title="BullBear Alpha"
                description={[
                  "GraphQL Integration: Implemented comprehensive GraphQL API integration, enabling efficient data querying and state management.",
                  "UI Development: Achieved 100% accuracy in translating Figma designs to the live application, maintaining design integrity and providing a seamless user experience.",
                  "Custom Search Functionality: Developed and deployed a robust custom search feature, enhancing the application's usability and performance.",
                  "GraphQL Mutations: Integrated GraphQL mutations to facilitate seamless message sending capabilities, improving user interaction and communication within the app.",
                ]}
                techArray={[
                  "Next JS",
                  "TypeScript",
                  "GraphQL API",
                  "Tailwind-css",
                ]}
                link="https://www.bullbearalpha.com/"
              />
            </div>
          </div>
        )}

        {/*WORK  PROJECT DISPLAY DIV ENDS */}
      </div>
    </>
  );
};

export default Projects;
