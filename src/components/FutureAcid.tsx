import React from "react";

import Leftimg from "../assets/media/logos/acidTextLessIcon.png";
import Flex from "../UI-elements/Flex";
import Container from "../UI-elements/Container";
import Button from "../UI-elements/Button";

const FutureAcid = () => {
  return (
    <>
      <Flex className=" py-4 lg:bg-main">
        <Container>
          <Flex className="flex-col py-4" isCentered={true}>
            <div className="text-center flex justify-between items-center flex-col lg:flex-row">
              <div className="flex justify-between mt-9 ">
                <img
                  src={Leftimg}
                  alt="icon"
                  className="lg:w-[450px] w-[250px]"
                  style={{ animation: "bounce 1s infinite alternate" }}
                />
              </div>
              <div className="text-left p-4 w-full lg:w-[50%] ">
                <h1 className="bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF] hogira bg-clip-text text-transparent text-2xl lg:text-4xl">
                  Launch Into the future with Acidbase today!
                </h1>
                <p className="text-paragraph plus-jakarta-sans-light text-[18px] opacity-[0.6] my-6 lg:w-[80%]">
                  Acidbase token (ACB) will be used to access services and
                  products offered by the Acidbase platform. It can also be used
                  for governance purposes, such as voting on proposals and
                  decisions related to the platform's development
                </p>
                <div className="text-center lg:text-left">
                 <Button/>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default FutureAcid;
