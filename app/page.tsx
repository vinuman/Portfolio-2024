import Image from "next/image";
import github from "./assets/github.svg";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="px-[165px] py-[40px] bg-primary-100 min-h-screen">
        <Navbar />
      </div>
    </>
  );
}
