import React from "react";
import PhaseHeader from "./PhaseHeader";
import Icon from "../../../assets/media/logos/acidTextLessIcon.png";
import PhaseBody from "./PhaseBody";

const Phase = ({ title, line, heading }: any) => {
  return (
    <div className=" flex items-start w-full">
      <div className="text-white mt-8">
        <div
          className={` flex flex-col justify-between items-center  relative rounded-full `}
        >
          <div className="bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF] z-[100] p-1 w-16 h-16 mr-7 rounded-full flex justify-center items-center">
            <div
              className={` h-[60px] w-[60px] flex justify-center items-center rounded-full z-[100] bg-[#0A1026] `}
            >
              <img src={Icon} alt="icon" width="30px" className="rotate-90" />
            </div>
          </div>
          {line ? (
            <div
              className={` h-[240px] w-[40px] -mt-1 flex justify-center items-center rounded-full z-[1] bg-[#0A1026] `}
            ></div>
          ) : null}
          {line ? null : (
            <div className="h-1 w-[460%] mr-5 lg:w-[260%] xl:w-[210%] lg:mb-24 xl:mb-12 bg-gradient-to-b from-[#32F7AA] to-[#1D47FF] rotate-90 absolute -bottom-[217px] xl:-bottom-[190px] lg:-bottom-[260px]"></div>
          )}
        </div>
      </div>
      <div>
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

export default Phase;
