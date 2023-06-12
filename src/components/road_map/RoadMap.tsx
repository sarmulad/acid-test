import React from "react";
import RoadMapHeader from "./RoadMapHeader";
import roadmap from "../../assets/json/roadmap.json";
import Phase from "./Phases/Phase";
import { isMobile } from "react-device-detect";
import PhaseDeskstop from "./Phases/PhaseDeskstop";

const RoadMap = () => {
  return (
    <div className=" w-full lg:mb-20 mt-24 lg:mt-20">
      <RoadMapHeader />

      {isMobile ? (
        <div className="flex justify-center items-center flex-col">
          {roadmap.map((d, i) => (
            <Phase
              key={i}
              title={d.title}
              value={1}
              heading={d.phase}
              line={d.line}
            />
          ))}
        </div>
      ) : (
        <div>
          {roadmap.map((d, i) => (
            <PhaseDeskstop
              key={i}
              title={d.title}
              heading={d.phase}
              value={d.value}
              reverse={i % 2 !== 0}
              line={d.line}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoadMap;
