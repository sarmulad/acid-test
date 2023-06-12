import React from "react";

const PhaseHeader = ({ title }: any) => {
  return (
    <div>
      <div
        className="text-left text-sm lg:text-[36px] font-thin  leading-10  mt-8
    text-white  plus-jakarta-sans "
      >
        {title}
      </div>
    </div>
  );
};

export default PhaseHeader;
