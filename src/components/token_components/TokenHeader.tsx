import React from "react";

const TokenHeader = ({ title1, subtitle1, subtitle2, description }: any) => {
  return (
    <div className="text-left mb-16">
      <div className=" font-medium text-2xl text-paragraph  leading-8 text-left mt-3 opacity-[0.6] ">
        {subtitle1}
      </div>
      <div className="text-2xl font-medium  leading-10  mt-2 text-white">
        {subtitle2}
      </div>
    </div>
  );
};

export default TokenHeader;
