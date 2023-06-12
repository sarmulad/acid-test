import React from "react";
import Flex from "../../../UI-elements/Flex";

const PhaseBody = ({ heading, detail, icon }: any) => {
  return (
    <div>
      <Flex className="justify-start items-center my-2">
        <Flex
          className=" bg-gradient-to-br from-[#8cb4e3ab] to-[#8cb4e31a] w-6 h-6 rounded-md"
          isCentered
        >
          <img src={icon} alt="logo" />
        </Flex>

        <h1 className="text-xs lg:text-[14px] plus-jakarta-sans leading-8 text-[#BCD6FF] opacity-[0.85] font-normal ml-4">
          {heading}
        </h1>
      </Flex>
    </div>
  );
};

export default PhaseBody;
