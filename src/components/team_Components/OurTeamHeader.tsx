import React from "react";
import Heading from "../../UI-elements/SectionHeading";

const OurTeamHeader = ({ title, description, description2 }: any) => {
  return (
    <div className="text-center lg:flex ">
      <div className="text-center flex flex-col items-center mb-6 justify-center lg:items-start lg:text-left ">
        <Heading className="mb-3">{title}</Heading>

        <p className="text-white plus-jakarta-sans-light text-base lg:text-xl opacity-[0.7] leading-7 mb-4">
          {description}
        </p>
        <p className="text-white plus-jakarta-sans-light text-base lg:text-xl opacity-[0.7] leading-6">
          {description2}
        </p>
      </div>
    </div>
  );
};

export default OurTeamHeader;
