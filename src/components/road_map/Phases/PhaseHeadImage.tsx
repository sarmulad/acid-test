import React from "react";

const PhaseHeadImage = ({ webImg }: any) => {
  return (
    <div className="w-full lg:w-auto h-200 bg-center bg-cover  flex-none order-0 flex-grow-0  ">
      <img
        src={webImg}
        alt="logo"
        className="mx-auto rounded-xl h-auto xl:h-[250px] w-[500px]"
      />
    </div>
  );
};

export default PhaseHeadImage;
