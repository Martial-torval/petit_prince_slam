import React, { useLayoutEffect } from "react";
import ActionCulturelle from "../ActionCulturelle/ActionCulturelle";
import Cd from "../CD/Cd";
import HeroHeader from "../Hero/HeroHeader.js";
import "../../App.css";
import Spectacle from "../Spectacle/Spectacle.js";
import Team from "../Team/Team.js";
import Representation from "../Representation/Representation.js";
import Video from "../Video/Video.js";
import Footer from "../Footer/Footer.js";
import Pro from "../Pro/Pro.js";
import ScrollToTop from "react-scroll-to-top";
// import ScrollRestauration from "../ScrollRestauration/ScrollRestauration";

const HomePage = () => {
  return (
    <>
      {/* <ScrollRestauration /> */}
      <HeroHeader />
      <Spectacle />
      <Team />
      <Video />
      <Representation />
      <ActionCulturelle />
      <Cd />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
