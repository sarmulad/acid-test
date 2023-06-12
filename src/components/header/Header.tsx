import React from "react";
import Navbar from "../../UI-elements/Navbar";
import TextBlock from "./hero/TextBlock";
import PresaleCountdown from "./hero/PresaleCountdown";
import Flex from "../../UI-elements/Flex";

function Header() {
  return (
    <div className="h-screen bg-black relative ">
      <video
        src={require(`../../assets/media/Home/Desktop.mp4`)}
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="w-full flex justify-center items-center ">
        <Flex
          className="lg:max-w-[80%] mx-auto absolute top-0 flex-col w-full z-50"
          isCentered={true}
        >
          <Navbar />
          <Flex
            className="max-w-[80%] lg:max-w-full absolute top-12 mx-auto flex-col w-full "
            // isCentered={true}
          >
            <TextBlock />
            <PresaleCountdown />
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default Header;
