import features from "../assets/json/features.json";
import Flex from "../UI-elements/Flex";
import Card from "../UI-elements/Cards";
import Heading from "../UI-elements/SectionHeading";

function Features() {
  return (
    <Flex className="flex-col pb-10 mt-24 lg:mt-48" isCentered={true} id="features">
      <Flex className="flex-col" isCentered={true}>
        <Flex className=" text-center flex-col mb-6 lg:mb-12" isCentered={true}>
          <Heading>FEATURES</Heading>
        </Flex>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-6">
          {features?.map((d, i) => (
            <Card
              icon={require(`../assets/media/Features/Frame${i + 1}.png`)}
              heading={d.heading}
              detail={d.detail}
              key={i}
            />
          ))}
        </div>
      </Flex>
    </Flex>
  );
}

export default Features;
