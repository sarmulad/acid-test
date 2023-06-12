import React from "react";
import Flex from "./Flex";

interface Iprops {
  center?: boolean;
  icon?: string;
  heading: string;
  detail: string;
}

function Card(props: Iprops) {
  return (
    <div className="pb-0 lg:pb-10 lg:mt-0 ">
      <div
        className={` p-6 flex flex-col lg:h-[350px] cardhover ${
          props.center ? "items-center text-center" : " items-start"
        }`}
      >
        <Flex
          className=" bg-gradient-to-br from-[#8cb4e3ab] to-[#8cb4e31a] rounded-lg w-14 h-14 "
          isCentered
        >
          <img src={props.icon} alt="logo" />
        </Flex>

        <h1 className="text-xl lg:text-2xl plus-jakarta-sans leading-8 mt-8 mb-3  text-white opacity-[0.85] font-semibold">
          {props.heading}
        </h1>
        <p className="text-white plus-jakarta-sans-light text-xs lg:text-base mt-2 opacity-[0.7] leading-6  text-ellipsis overflow-hidden ">
          {props.detail}
        </p>
      </div>
    </div>
  );
}

export default Card;
