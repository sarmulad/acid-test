import React from "react";
import OurTeamHeader from "./OurTeamHeader";
import Button from "../../UI-elements/Button";

const OurTeam = () => {
  return (
    <div className=" flex justify-center text-center  lg:flex-row flex-col mt-24 lg:mt-48 " id="team">
      <div className="w-full ">
        <div className=" flex flex-col lg:items-start items-center text-center lg:items-left">
          <OurTeamHeader
            title="Our Team"
            description2="The team's deep knowledge and experience in their respective fields are leveraged to provide a comprehensive and holistic approach to personalized AI models and NFT creation. The team members work together to ensure that Acidbase stays at the forefront of innovation, continuously pushing the boundaries of what is possible in the digital world."
            description="Acidbase's team is composed of highly skilled professionals from diverse backgrounds. With expertise in fields such as artificial intelligence, blockchain development, data science, and business, the team is committed to developing cutting-edge solutions for AI immortality and digital legacy management."
          />

          <Button/>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
