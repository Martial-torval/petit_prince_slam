import Teaser from "../Teaser/Teaser.js";
import Menu from "../Menu/Menu.js";
import "../Hero/heroHeader.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <header className="w-100">
        <h1>
          Le petit <br />
          prince <br />
          slam !
        </h1>
        <Menu />
      </header>
      <section className="hero" id="hero">
        <Teaser />
        <span className="span-hero fst-normal">
          Par Fafapunk & Tomislav Matosin
        </span>
        <AnchorLink href="#spectacle" aria-label="Section spectacle">
          <ArrowDownwardIcon fontSize="large" className="arrow-down" />
        </AnchorLink>
      </section>
    </>
  );
};

export default Hero;
