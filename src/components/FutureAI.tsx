import React from "react";
import HexaImg from "../assets/media/logos/right_hexa.png";
import Flex from "../UI-elements/Flex";
import futureAIData from "../assets/json/futureAIData.json";
import Button from "../UI-elements/Button";

const FutureAI = () => {
  return (
    <Flex className="text-white flex-col-reverse lg:flex-row items-center mb-16 mt-24 lg:mt-36 justify-center lg:justify-between">
      <div className="w-full mt-9 lg:mt-0 lg:w-3/6 lg:mx-0">
        {futureAIData?.map((d, i) => (
          <div className="my-9" key={i}>
            <div className="grid lg:max-w-[86%] grid-cols-1 mx-auto lg:mx-0 bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF]  text-left divide-y shadow-md mt-3">
              <div className="opacity-10 border  border-paragraph "></div>
            </div>
            <h1 className="mt-6 text-xl lg:text-4xl plus-jakarta-sans font-semibold bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF] bg-clip-text text-transparent ">
              {d.title}
            </h1>
            <p className="text-paragraph plus-jakarta-sans text-[16px] font-semibold opacity-[0.6] mt-2 lg:w-[80%]">
              {d.description}
            </p>
          </div>
        ))}
        <div className="flex justify-center items-center lg:items-start lg:justify-start">
          {/* <button
            style={{
              background:
                "linear-gradient(65deg, #32F7AA -18.2%, #1D47FF 96.38%)",
            }}
            className="backdrop-blur-[129px] text-white w-3/5 rounded-[4rem] py-5 lg:w-[297px]"
          >
            Enter Presale
          </button> */}
          <Button/>
        </div>
      </div>
      <div
        className="w-full lg:w-[50%] flex justify-center items-center"
        style={{ animation: "bounce 1s infinite alternate" }}
      >
        <img src={HexaImg} alt="hexa" className="w-[750px]" />
      </div>
    </Flex>
  );
};

export default FutureAI;
