import Heading from "../../../UI-elements/SectionHeading";

function TextBlock() {

  return (
    <div className="text-start md:text-center mt-12  flex flex-col items-start md:items-center lg:mt-24 lg:mb-16 ">
      <Heading className="lg:text-[65px] text-[36px] leading-[50px]  lg:leading-[65px] mb-[20px] pt-4 flex flex-col md:flex-row  content-box">
        {/* <span className="text-white mr-4 font-bold block md:inline-block">{activeHead}</span> your legacy */}
        <span>
          <span className="flex md:inline-flex  mb-3 flex-col words overflow-hidden h-[40px]  md:h-[70px]">
              <span className="block h-[100%]  wordAnimate">Immortalise</span>
              <span className="block h-[100%]  wordAnimate">Eternalise</span>
              <span className="block h-[100%]  wordAnimate">Memorialise</span>
              <span className="block h-[100%]  wordAnimate">Immortalise</span>
              <span className="block h-[100%]  wordAnimate">Memorialise</span>
          </span>
          your legacy <br /> with Acidbase

        </span>

        {/* <br className="hidden lg:block" /> Live Forever */}
      </Heading>
      <p className=" text-base lg:text-2xl max-w-[820px] text-white mt-4 px-2 md:px-10 lg:px-0  mx-auto">
        A revolutionary platform that harnesses the power of Artificial{" "}
        <br className="hidden lg:block" />
        Intelligence to create your digital legacy.
      </p>
    </div>
  );
}

export default TextBlock;


