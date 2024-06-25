"use client";
import React, { useState, useRef } from "react";
import ProjectDisplay from "./ProjectDisplay";
import bg1 from "@/app/assets/bg1.jpg";
import bg2 from "@/app/assets/bg2.jpg";
import bg3 from "@/app/assets/bg3.jpg";
import bg4 from "@/app/assets/bg4.jpg";
import bg5 from "@/app/assets/bg5.jpg";
import bullbear1 from "@/app/assets/bullbear_cover1.png";
import bullbear2 from "@/app/assets/bullbear_cover2.png";
import dendrow1 from "@/app/assets/dendrow1.png";
import dendrow2 from "@/app/assets/dendrow2.png";
import crypto1 from "@/app/assets/crypto1.png";
import crypto2 from "@/app/assets/crypto2.png";
import podcast1 from "@/app/assets/podcast1.png";
import podcast2 from "@/app/assets/podcast2.png";
import finance1 from "@/app/assets/finance1.png";
import finance2 from "@/app/assets/finance2.png";
import intralync1 from "@/app/assets/intralync1.png";
import intralync2 from "@/app/assets/intralync2.png";

const Projects = () => {
  const [work, setWork] = useState(true);
  const ref = useRef<HTMLHeadingElement | null>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        ref={ref}
        className=" md:mt-[120px] mt-[60px] max-w-[1280px] mx-auto"
      >
        <div className={`flex items-center  gap-[100px]`}>
          <h1
            onClick={() => {
              setWork(true);
              handleClick();
            }}
            className={`text-white   font-bold cursor-pointer ${
              work
                ? "border-b-8 border-primary-200 lg:text-heading-xl sm:text-heading-l text-heading-m"
                : " lg:text-heading-l text-heading-m"
            }`}
          >
            Work
          </h1>
          <h2
            onClick={() => {
              setWork(false);
              handleClick();
            }}
            className={`text-white font-bold cursor-pointer ${
              !work
                ? "border-b-8 border-primary-200 lg:text-heading-xl sm:text-heading-l text-heading-m"
                : "lg:text-heading-l text-heading-m"
            }`}
          >
            Projects
          </h2>
        </div>
        {/*WORK  PROJECT DISPLAY DIV BEGINS */}
        {work && (
          <div className=" mt-[40px] flex flex-wrap gap-12  w-[100%]">
            <div className=" md:w-[45%] w-[100%]">
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
            <div className=" md:w-[45%] w-[100%]">
              <ProjectDisplay
                bgImage={bg4}
                projectImage1={intralync1}
                projectImage2={intralync2}
                title="IntraLync"
                description={[
                  "Custom Hooks for Pagination: Developed custom React hooks to manage the pagination of data fetched from a GraphQL API. This included handling page navigation, data fetching, and state management, providing a smooth and efficient user experience.",
                  "Code Refactoring: Refactored the existing codebase to follow best practices, making the code more modular, readable, and maintainable. This involved breaking down large components into smaller, reusable components and optimizing the overall architecture.",
                  "Scalability Improvements: Enhanced the application’s scalability by organizing the code structure to accommodate future growth, including adding new features or handling larger datasets without compromising performance.",
                ]}
                techArray={[
                  "React JS",
                  "Javascript",
                  "GraphQL API",
                  "Chakra-UI",
                ]}
                isDepolyed={false}
              />
            </div>
            <div className=" md:w-[45%] w-[100%]">
              <ProjectDisplay
                bgImage={bg3}
                projectImage1={dendrow1}
                projectImage2={dendrow2}
                title="Dendrow Web"
                description={[
                  "GraphQL Integration: Implemented CRUD operations through GraphQL mutations, allowing for efficient data manipulation and seamless interaction with the backend.",
                  "File Importing Feature: Developed features to enable users to import files, enhancing the application's utility and user experience.",
                  "Data Display: Implemented dynamic data display functionalities, ensuring that imported data is presented in an intuitive and user-friendly manner.",
                ]}
                techArray={[
                  "Next JS",
                  "TypeScript",
                  "GraphQL API",
                  "Tailwind-css",
                ]}
                isDepolyed={false}
              />
            </div>
          </div>
        )}

        {/*WORK  PROJECT DISPLAY DIV ENDS */}

        {/* PROJECTS DISPALY DIV */}

        {!work && (
          <div className=" mt-[40px] flex flex-wrap gap-12  w-[100%]">
            <div className=" md:w-[45%] w-[100%]">
              <ProjectDisplay
                bgImage={bg1}
                projectImage1={crypto1}
                projectImage2={crypto2}
                title="Crypto Tracker"
                description={[
                  "Real-Time Data Display: Fetches and displays up-to-date information on up to 100 cryptocurrencies, including price, market cap, volume, and more, directly from the CoinGecko API.",
                  "Comparison Tool: Enables users to compare multiple cryptocurrencies side-by-side, providing detailed metrics and visual insights to make informed investment decisions.",
                  "Performance Tracking: Users can track the performance of their selected cryptocurrencies on a weekly, monthly, or yearly basis, with data visualizations to illustrate trends and changes over time.",
                  "Watchlist Feature: Allows users to create a personalized watchlist using local storage, ensuring their favorite cryptocurrencies are always easily accessible. ",
                ]}
                techArray={[
                  "React JS",
                  "Javascript",
                  "REST-API",
                  "Tailwind-css",
                ]}
                link="https://crypto-trackerrr.netlify.app/"
              />{" "}
            </div>
            <div className=" md:w-[45%] w-[100%]">
              <ProjectDisplay
                bgImage={bg5}
                projectImage1={podcast1}
                projectImage2={podcast2}
                title="Podcast App"
                description={[
                  "Podcast Creation and Publishing: Users can effortlessly create new podcasts and publish them, making their content available to a wider audience.",
                  "Episode Management: After publishing a podcast, users can continually add or remove episodes, ensuring their podcast remains current and engaging.",
                  "Custom Audio Player: A tailor-made audio player provides a superior listening experience, allowing users to enjoy podcasts directly within the application.",
                  "User Profile Management: Users can personalize their profile by editing their name and profile picture, ensuring their podcasting persona reflects their unique identity.",
                  "Account Deletion: For users who wish to discontinue their service, the option to delete their account is readily available, ensuring complete control over their data.",
                ]}
                techArray={[
                  "React JS",
                  "Javascript",
                  "Firebase",
                  "Tailwind-css",
                ]}
                link="https://podcast-react-app-v.netlify.app/"
              />
            </div>
            <div className=" md:w-[45%] w-[100%]">
              <ProjectDisplay
                bgImage={bg3}
                projectImage1={finance1}
                projectImage2={finance2}
                title="Finance Tracker"
                description={[
                  "Income and Expense Tracking: Users can add their income and expenses, ensuring a complete overview of their financial activities.",
                  "Categorization: Multiple categories are available for both income and expense entries, allowing users to organize their finances with precision.",
                  "Sortable Tables: Income and expense data can be displayed in a table format, which can be sorted by date and amount, providing clear and organized views of financial transactions.",
                  "CSV Export: Users can export their financial data as a CSV file, making it easy to backup, share, or further analyze their transactions.",
                ]}
                techArray={[
                  "React JS",
                  "Javascript",
                  "Firebase",
                  "Tailwind-css",
                ]}
                link="https://finance-trackerrr.netlify.app/"
              />
            </div>
          </div>
        )}
        {/* PROJECTS DISPALY DIV ENDSs */}
      </div>
    </>
  );
};

export default Projects;
