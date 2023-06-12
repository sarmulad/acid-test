import React from "react";
import PhaseHeader from "./PhaseHeader";
import Icon from "../../../assets/media/logos/acidTextLessIcon.png";
import PhaseBody from "./PhaseBody";

const PhaseDeskstop = ({ title, line, reverse, heading }: any) => {
  const orderClass = reverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={` px-0 py-4 flex justify-between items-center ${orderClass}`}
    >
      <div className="w-[30%] "></div>

      <div
        className={` flex flex-col justify-between items-center  relative rounded-full `}
      >
        <div className="bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF] p-1 w-36 h-36 rounded-full flex justify-center items-center">
          <div
            className={` h-[138px] w-[138px] flex justify-center items-center rounded-full z-[50] bg-[#0A1026] `}
          >
            <img src={Icon} alt="icon" width="80px" className="rotate-90" />
          </div>
        </div>

        {line ? null : (
          <div className="h-1 w-auto lg:w-[260%] xl:w-[290%] lg:mb-24  xl:mb-12 bg-gradient-to-b from-[#32F7AA] to-[#1D47FF] rotate-90 absolute -bottom-0 xl:-bottom-[190px] lg:-bottom-[260px]"></div>
        )}
      </div>

      <div className="w-[30%] h-[50%] px-1 mt-24">
        <PhaseHeader title={title} />

        {heading?.map((d: any, i: number) => (
          <PhaseBody
            key={i}
            heading={d.des}
            icon={require(`../../../assets/media/phase/P${i + 1}.png`)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhaseDeskstop;
