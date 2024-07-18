"use client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./Contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="lg:px-[165px] md:px-[80px] px-[40px] py-[40px] bg-primary-100 min-h-screen mx-auto">
        <div ref={homeRef}>
          <Navbar />
        </div>

        <Main scrollToContact={scrollToContact} />
        <Projects />
      </div>
      <div className="bg-secondary-100" ref={contactRef}>
        <Contact scrollToHome={scrollToHome} />
      </div>
    </>
  );
}
