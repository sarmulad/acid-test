import Flex from "../UI-elements/Flex";
import Heading from "../UI-elements/SectionHeading";

const images = [
  { alt: "Card Image 1" },
  { alt: "Card Image 2" },
  { alt: "Card Image 3" },
  { alt: "Card Image 4" },
];

const FeaturedIn = () => {
  return (
    <div className=" justify-center  flex mb-24 lg:mb-0 mt-10 lg:mt-48">
      <div className="mt-10 b-blue-400 text-center py-4 w-full">
        <Flex className=" text-center flex-col" isCentered={true}>
          <Heading>Featured In</Heading>
        </Flex>
        <div className="mt-5 flex items-center flex-col lg:flex-row justify-between  ">
          {images.map(({ alt }, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md p-4 my-2 bg-[#344B88] w-[280px] xl:w-[300px] h-[120px] text-center flex justify-center items-center"
            >
              <img
                src={require(`../assets/media/featureIn/fn${index + 1}.png`)}
                alt={alt}
                className="rounded-md flex-none order-1 flex-grow-0 p-0 lg:p-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
