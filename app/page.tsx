"use client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./Contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="lg:px-[165px] md:px-[80px] px-[40px] py-[40px]  min-h-screen mx-auto bg-[#1f2733]">
        <div ref={homeRef}>
          <Navbar />
        </div>
        <div>
          <Main
            scrollToProject={scrollToProject}
            scrollToContact={scrollToContact}
          />
        </div>
      </div>
      <div
        ref={projectRef}
        className="bg-[#0f141e] g:px-[165px] md:px-[80px] px-[40px] py-[40px]  min-h-screen mx-auto"
      >
        <Projects />
      </div>
      <div className="bg-[#1f2733]" ref={contactRef}>
        <Contact scrollToHome={scrollToHome} />
      </div>
    </>
  );
}
