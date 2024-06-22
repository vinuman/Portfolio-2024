import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <div className="px-[165px] py-[40px] bg-primary-100 min-h-screen">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
