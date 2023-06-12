import { useState, useEffect } from "react";
import logo from "../assets/media/logos/acidbase03.png";
import {ReactComponent as Lock} from "../assets/media/Svgs/lockB.svg";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav
      className={`mx-auto w-full text-white py-2 px-4 lg:px-8 lg:py-4 z-[100] ${
        openNav
          ? "bg-[#0A1026] h-screen transition-height duration-500"
          : "bg-inherit"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <img src={logo} className="w-32" alt="logo" />
        </div>
        <div className="hidden lg:block ">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 ">
            {["Home", "Features", "Tokenomics", "Team", "Whitepaper"].map(
              (Link, i) => (
                <li
                  key={i}
                  className="p-1 my-3 lg:my-0 font-semibold hover:bg-gradient-to-r hover:from-[#32F7AA] hover:to-[#1D47FF] cursor-pointer hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  <div className="flex items-center text-blue-gray">{Link}</div>
                </li>
              )
            )}
          </ul>
        </div>
        <button
          style={{
            background:
              "linear-Gradient(90deg, #DAB145 -5.89%, #EEE571 13.36%, #E9CC66 37.21%, #CFA944 57.47%, #FFDB7C 77.06%, #C0941F 116.5%)",
          }}
          className="px-10 py-3 text-black hidden rounded-[4rem] lg:flex gap-3 items-center justify-center"
        >
          <Lock/>
          <span className="font-bold"> Enter Presale</span>
        </button>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden transition-all duration-300"
          onClick={() => setOpenNav(!openNav)}
          style={{ background: "transparent" }}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div className="leading-[5px] flex flex-col items-start font-black -mt-3">
              <span>___</span>
              <span>___</span>
              <span>___</span>
              <span>__</span>
            </div>
          )}
        </button>
      </div>
      {openNav && (
        <div className="container mx-auto flex justify-center items-center flex-col mt-8">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 text-base">
            {["Home", "Features", "Tokenomics", "Team", "Whitepaper"].map(
              (Link, i) => (
                <li
                  key={i}
                  className="p-1 my-3 lg:my-0 font-normal hover:bg-gradient-to-r hover:from-[#32F7AA] hover:to-[#1D47FF] cursor-pointer hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  <div className="flex items-center text-blue-gray">{Link}</div>
                </li>
              )
            )}
          </ul>
          <button
            style={{
              background:
                "linear-Gradient(90deg, #DAB145 -5.89%, #EEE571 13.36%, #E9CC66 37.21%, #CFA944 57.47%, #FFDB7C 77.06%, #C0941F 116.5%)",
            }}
            className="px-10 py-4 text-black flex items-center justify-center gap-3 font-medium rounded-[4rem] mt-12"
          >
            <Lock />
            Enter Presale
          </button>
        </div>
      )}
    </nav>
  );
}
