import React from "react";
import Features from "../components/Features";
import ProcessOverview from "../components/ProcessOverview";
import Token from "../components/token_components/Token";
import RoadMap from "../components/road_map/RoadMap";
import OurTeam from "../components/team_Components/OurTeam";
import FutureAcid from "../components/FutureAcid";
import FeaturedIn from "../components/Featured_In";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import FAQs from "../components/FaQ";
import Container from "../UI-elements/Container";
import FutureAI from "../components/FutureAI";
import Cookies from "../components/Cookies";
import Header from "../components/header/Header";


function Home() {
  return (
    <>
    <Header/>
    <div className="bg-[#0A1026] pt-10">
      <Cookies/>
      <Container>
        <FutureAI />
        <Features />
        <ProcessOverview />
        <Token />
        <RoadMap />
        <OurTeam />
        <FAQs />
      </Container>
      <FutureAcid />
      <Container>
        <FeaturedIn />
        <NewsLetter />
      </Container>
      <Footer />
    </div>
    </>
  );
}

export default Home;
