import React from "react";
import "./footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramLogo from "../../assets/img/instagram.png";
import FacebookLogo from "../../assets/img/facebook.png";
import goneprodLogo from "../../assets/img/logo_goneprod.png";
import sacemLogo from "../../assets/img/logo_sacem.jpg";
import spedidamLogo from "../../assets/img/logo_spedidam.png";
import regionLogo from "../../assets/img/logo_region.png";
import yzeurespaceLogo from "../../assets/img/logo_yzeure.png";
import riomLogo from "../../assets/img/riom.jpg";
import { Link as ExternalLink } from "react-router-dom";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="row col-12">
        <div className="col-lg-3 col-12">
          <h4>Le petit prince slam !</h4>
          <p className="p-footer">
            D'après Le Petit Prince, de Saint Exupéry
            <br /> © Editions Gallimard (1945)
            <br /> © Photos Julie CHERKI
          </p>

          <h4 className="mt-5"> Production & Coproduction</h4>
          <img src={goneprodLogo} alt="logo goneprod" className="goneprod" />
          {/* <h4 className="mt-3">Coproduction</h4> */}
          <img
            src={yzeurespaceLogo}
            alt="logo Yzeurespace"
            className="partenaires me-3"
          />
          <img src={riomLogo} alt="logo Yzeurespace" className="partenaires" />
        </div>
        <div className="col-lg-3 col-12">
          <h4 className="mt-lg-0 mt-5">Structure du site</h4>
          <ul>
            <li>
              <AnchorLink href="#home">Accueil</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#spectacle">Le spectacle</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team">L'équipe</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#video">Les vidéos</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#representation">Les représentions</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#ac">Actions culturelles</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#cd">Audio du spectacle</AnchorLink>
            </li>
            <li>
              <ExternalLink to="/espace-professionnel">
                Espace professionnel
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12 contact">
          <h4 className="mt-lg-0 mt-4">Contact</h4>
          <div className="mb-3 d-flex flex-column">
            <h5>Goneprod</h5>
            <span>7, rue Justin Godart</span>
            <span>69004, Lyon</span>
          </div>

          <div className="d-flex flex-column mb-3">
            <span>Pierre-Marie Sangouard</span>
            <span>pierre@goneprod.fr</span>
          </div>

          <div className="d-flex flex-column">
            <span>Margaux DK</span>
            <span>margaux@goneprod.fr</span>
          </div>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column">
          <h4 className="mt-lg-0 mt-5">Nos réseaux sociaux</h4>
          <div className="">
            <a
              href="https://www.instagram.com/lepetitprinceslam/"
              target="_blank"
            >
              <img
                src={InstagramLogo}
                alt="Logo Instagram"
                className="logo-footer me-4"
              />
            </a>
            <a
              href="https://www.facebook.com/lepetitprinceslam"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FacebookLogo}
                alt="Logo Facebook"
                className="logo-footer"
              />
            </a>

            {/* <FacebookIcon fontSize={"large"} className="me-3" />
            <InstagramIcon fontSize={"large"} /> */}
          </div>
          <h4 className="mt-5">Soutien à la création</h4>
          <div className="">
            <img
              src={sacemLogo}
              alt="Logo sacem"
              className="logo-footer me-4 w-25 h-auto"
            />
            <img
              src={spedidamLogo}
              alt="Logo spedidam"
              className="logo-footer w-25 h-auto"
            />

            <img
              src={regionLogo}
              alt="Logo spedidam"
              className="logo-footer w-25 h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
