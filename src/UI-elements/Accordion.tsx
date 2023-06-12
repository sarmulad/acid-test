import React, { useState } from "react";
import RightIcon from "../assets/media/faqs/RightIcon.png";
import UpIcon from "../assets/media/faqs/UpIcon.png";

const Accordion = ({ title, content }: any) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="mt-6 lg:mt-5 lg:my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white rounded-lg"
      onClick={toggleExpanded}
      style={
        expanded
          ? {
              background:
                "linear-gradient(65deg, #32F7AA -18.2%, #1D47FF 96.38%)",
            }
          : { backgroundColor: "#17254D" }
      }
    >
      <div
        className={`px-6 text-left items-center h-14 select-none flex justify-between flex-row 
        ${expanded ? "rounded-t-lg" : "rounded-lg"} text-white`}
        style={
          expanded
            ? {
                background:
                  "linear-gradient(65deg, #32F7AA -18.2%, #1D47FF 96.38%)",
              }
            : { backgroundColor: "#17254D" }
        }
      >
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none pl-2">
          {expanded ? (
            <img src={UpIcon} alt="up_icon" />
          ) : (
            <img src={RightIcon} alt="right_icon" />
          )}
        </div>
      </div>
      <div
        className={`px-6  overflow-hidden transition-[max-height] duration-500 ease-in bg-[#17254D] rounded-b-lg text-white ${
          expanded ? "max-h-40 pt-3" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
