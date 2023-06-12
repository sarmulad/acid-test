import React from "react";
import process from "../assets/json/processDNA.json";
import Card from "../UI-elements/Cards";
import Flex from "../UI-elements/Flex";
import Heading from "../UI-elements/SectionHeading";
import Button from "../UI-elements/Button";

function ProcessOverview() {
  return (
    <Flex className="flex-col pb-10 mt-24 lg:mt-48" isCentered={true}>
      <Flex className="flex-col " isCentered={true}>
        <Flex className=" flex-col text-center mb-12" isCentered={true}>
          <Heading>PROCESS OVERVIEW</Heading>
        </Flex>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-5 lg:mt-12">
          {process?.map((d, i) => (
            <Card
              key={i}
              heading={d.heading}
              detail={d.detail}
              icon={require(`../assets/media/featureoverviewcard/FO_${
                i + 1
              }.png`)}
            />
          ))}
        </div>
        <Button/>
      </Flex>
    </Flex>
  );
}

export default ProcessOverview;
