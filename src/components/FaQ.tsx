import React from "react";
import Accordion from "../UI-elements/Accordion";
import Flex from "../UI-elements/Flex";
import faq from "../assets/json/faq.json";
import Heading from "../UI-elements/SectionHeading";

const FaQ = () => {
  return (
    <Flex isCentered className="mt-24 lg:mb-48 lg:mt-48 ">
      <Flex className="bg-[#171D32] lg:bg-secondary rounded-xl py-10 w-full flex-col lg:px-3 items-center">
        <Heading className="lg:text-5xl text-center">
          frequently <br className="block lg:hidden" /> asked questions
        </Heading>
        <p className="text-white plus-jakarta-sans-light text-lg mt-1 opacity-[0.7] leading-7 mb-4 text-center ">
          Are you curious about how Acidbase can benefit you? Here are the most
          common questions and answers
        </p>
        <div className="flex justify-around flex-col lg:grid lg:grid-cols-2 lg:mt-2 mt-0">
          {faq?.map((d, i) => (
            <div key={i} className=" mx-5">
              <Accordion title={d.title} content={d.content} />
            </div>
          ))}
        </div>
      </Flex>
    </Flex>
  );
};

export default FaQ;
