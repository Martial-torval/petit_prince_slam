import React from "react";
import "./pro.css";
import { Carousel } from "react-responsive-carousel";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leftArrow from "../../assets/img/left-arrow.png";
import rightArrow from "../../assets/img/right-arrow.png";
import presse1 from "../../assets/img/presse1.webp";
import presse2 from "../../assets/img/presse2.webp";
import presse3 from "../../assets/img/bg-team.webp";
import presse4 from "../../assets/img/presse4.webp";
import logoDownload from "../../assets/img/download.png";
import Footer from "../Footer/Footer";
import dossierArtistique from "../../assets/img/dossier_artistique.pdf";
import dossierPedagogique from "../../assets/img/dossier_pédagogique.pdf";
import dossierTechnique from "../../assets/img/dossier_technique.pdf";
import ficheCommunication from "../../assets/img/fiche_de_communication.pdf";
import pdfPlanete from "../../assets/img/fp-planete.pdf";
import pdfSlam from "../../assets/img/fp-slam.pdf";
import ScrollRestauration from "../ScrollRestauration/ScrollRestauration";
// console.log(window.location.href);

const pro = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  console.log();
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    // onMove means if dragging or swiping in progress.
    return (
      <button onClick={() => onClick()}>
        <img
          src={rightArrow}
          alt="RightArrow"
          className="rightArrowMulti h-auto"
        />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button onClick={() => onClick()}>
        <img
          src={leftArrow}
          alt="LeftArrow"
          className="leftArrowMulti h-auto"
        />
      </button>
    );
  };
  return (
    <>
      {/* <button className="btn-prev my-3">
        <img src={leftArrow} alt="flèche page précédente" />
      </button> */}
      <ScrollRestauration />
      <section className="row col-12 m-0 section--pro">
        <article className="col-12 border-top-0 border-end-0">
          <h2 className="mt-3 h2--pro ms-lg-3 ms-0">Contact</h2>
          <div className="row mt-5">
            <div className="p-0 col-lg-3 col-12  ms-lg-3 ms-0 mb-lg-0 mb-5">
              <h3 className="ms-3">Pierre-Marie Sangouard</h3>
              <span className="ms-3">Directeur de production</span>
              <p className="ms-3 mb-0">production@goneprod</p>
              <p className="ms-3">06.62.77.32.74 / 04.28.29.70.92</p>
            </div>
            <div className="p-0 col-lg-3 col-12 mb-lg-0 mb-5">
              <h3 className="ms-3 ">Margaux DK</h3>
              <span className="mb-5 ms-3">Administratrice tournée</span>
              <p className="ms-3 mb-0">margaux@goneprod</p>
              <p className="ms-3">06.45.28.27.57</p>
            </div>

            <div className="p-0 col-lg-3 col-12 mb-lg-0 mb-3">
              <h3 className="ms-3">Maël Thöni </h3>
              <span className="mb-5 ms-3">Régisseur</span>
              <p className="ms-3 mb-0">mael@goneprod.fr</p>
              <p className="ms-3">06.62.03.68.59</p>
            </div>
          </div>
          <p className="ms-lg-3 ms-0 mt-4">
            Par une simple demande par mail, vous pouvez : vous inscrire à notre
            Newsletter, faire une demande de devis et/ou obtenir la captation
            complète du spectacle.
          </p>
        </article>
        <article className=" col-12  border-top-0 border-start-0">
          <h2 className="ms-lg-3 h2--pro ms-0 mt-5">
            Fichiers téléchargeables
          </h2>
          <div className="col-12 d-flex flex-column align-items-start justify-content-center mt-5 ms-lg-3 ms-0">
            <p className="mb-4">
              Vous avez accès a tout les documents liés au spectacle et à nos
              actions culturelles ci-dessous :{" "}
            </p>
            <div className="col-12 row">
              <div className="col-lg-6 col-12 pe-0">
                <a href={dossierArtistique} download>
                  <button className="mb-3 me-3 file--button d-flex justify-content-center">
                    Dossier artistique
                    <img
                      src={logoDownload}
                      alt="logo téléchargement"
                      className="ms-2"
                    />
                  </button>
                </a>
                <a href={dossierPedagogique} download>
                  <button className="mb-3 me-3 file--button d-flex justify-content-center">
                    Dossier pédagogique
                    <img
                      src={logoDownload}
                      alt="logo téléchargement"
                      className="ms-2"
                    />
                  </button>
                </a>
                <a href={dossierTechnique} download>
                  <button className="mb-3 me-3 file--button d-flex justify-content-center">
                    Dossier technique
                    <img
                      src={logoDownload}
                      alt="logo téléchargement"
                      className="ms-2"
                    />
                  </button>
                </a>
                <a href={ficheCommunication} download>
                  <button className="mb-3 me-3 file--button d-flex justify-content-center">
                    Fiche de communication
                    <img
                      src={logoDownload}
                      alt="logo téléchargement"
                      className="ms-2"
                    />
                  </button>
                </a>
              </div>
              <div className="col-lg-6 col-12 pe-0 mt-lg-0">
                <a
                  href={pdfSlam}
                  download="Fiche de présentation | Spoken Word"
                >
                  <button className="mb-3 me-3 file--button d-flex justify-content-center">
                    Fiche de présentation | Spoken Word
                    <img
                      src={logoDownload}
                      alt="logo téléchargement"
                      className="ms-2"
                    />
                  </button>
                </a>
                <a
                  href={pdfPlanete}
                  download="Fiche de présentation | Dessines-moi une planete"
                >
                  <button className="mb-3 me-3 file--button d-flex justify-content-center">
                    Fiche de présentation | Dessine-moi une planete
                    <img
                      src={logoDownload}
                      alt="logo téléchargement"
                      className="ms-2"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className=" col-12  border-end-0 border-bottom-0">
          <h2 className="h2--pro ms-3 mt-5">Prescriptions</h2>

          <Carousel
            interval={3000}
            centerMode="true"
            centerSlidePercentage="100"
            showStatus="false"
            autoPlay="true"
            infiniteLoop="true"
            showThumbs={false}
            className="py-5 carousel--pro__prescription"
            renderArrowPrev={(clickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  aria-label="prev slide / item"
                  className="control-arrow btn-arrow-prev"
                  onClick={clickHandler}
                >
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={leftArrow}
                    alt="arrow"
                  />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  aria-label="next slide / item"
                  onClick={clickHandler}
                  className="control-arrow btn-arrow-next"
                >
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={rightArrow}
                    alt="arrow"
                  />
                </button>
              )
            }
          >
            <div>
              <h3>
                Directeur de la Succession Antoine de Saint-Exupéry - d’Agay
              </h3>
              <span> </span>
              <p className="text-start mt-3">
                "Il y a de la poésie, de l’humour, de l’ironie dans Le Petit
                Prince. On retrouve tout cela dans votre spectacle. C’est
                vraiment une grande réussite. Bravo ! " <br />
                <br />{" "}
              </p>
            </div>
            <div>
              <h3>nosenchanteurs.eu</h3>
              <p className="text-start mt-3">
                "Absolument magique, équilibré, drôle, plein d’émotion.
                Indispensable pour tous les âges. Et particulièrement en ce
                moment pour la vraie valeur des choses" <br />
                <br />{" "}
              </p>
            </div>
            <div>
              <h3>La Montagne</h3>
              {/* <span>nosenchanteurs.eu</span> */}
              <p className="text-start mt-3">
                "Pourquoi encore une version de cette œuvre mythique ? Les deux
                artistes y répondent avec élégance et brio, sans rien trahir de
                l'esprit du conte philosophique. Ils réussissent par leur
                interprétation un véritable tour de force " <br />
                <br />{" "}
              </p>
            </div>
          </Carousel>
        </article>

        <article className=" col-12  position-relative  border-bottom-0 border-start-0 mb-5">
          <h2 className="h2--pro ms-3 mt-5">Presse</h2>
          <MultiCarousel
            CustomRightArrow={CustomRightArrow}
            CustomLeftArrow={CustomLeftArrow}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className="mt-5 multi-carousel mx-auto"
            containerClass="container-with-dots"
            dotListClass="dot--multiCarousel"
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass="p-3"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            <div>
              <img className="card-img-top w-100" src={presse1} alt="" />

              <div className="card-body">
                <h5 className="card-title  mt-4">
                  {" "}
                  « Le Petit Prince Slam » a enchanté le public sous le viaduc
                  de Mussy-sous-Dun
                </h5>
                <span className="mb-3 d-inline-block">
                  09/05/2022 - Le Journal de Saône-et-Loire
                </span>
                <p className="card-text mb-4">
                  Dans le cadre du festival Saperli'poètes, organisé par la
                  communauté de communes Brionnais Sud Bourgogne et transportant
                  la poésie dans les villages , un très beau spectacle s'est
                  déroulé dimanche après-midi à Mussy-sous-Dun...
                </p>
                <a
                  href=" https://www.lejsl.com/culture-loisirs/2022/05/09/le-petit-prince-slam-a-enchante-le-public-sous-le-viaduc-de-mussy-sous-dun"
                  target="_blank"
                  className="card--button"
                >
                  Lire l'article
                </a>
              </div>
            </div>

            <div>
              <img className="card-img-top w-100" src={presse2} alt="" />
              <div className="card-body">
                <h5 className="card-title mt-4">
                  Des slameurs en herbes au lycée Gordini
                </h5>
                <span className="mb-3 d-inline-block">
                  24/03/2022 - Le Brise-Glace
                </span>
                <p className="card-text mb-4">
                  Fafapunk, artiste accompli, slameur annécien, inéluctable
                  partenaire du Brise Glace, est allé à la rencontre d'une
                  classe de lycéens du Lycée professionnel Amédée Gordini à
                  Seynod.
                </p>
                <a
                  href="https://www.le-brise-glace.com/slameurs-herbes-lycee-gordini/?fbclid=IwAR148aslwdk1LBd6kb2FCiBzgIcMPZh1BKsmvZWO9ad4wa7eJSKN2OtjSJc"
                  className="card--button"
                  target="_blank"
                >
                  Lire l'article
                </a>
              </div>
            </div>
            <div>
              <img className="card-img-top w-100" src={presse3} alt="" />
              <div className="card-body">
                <h5 className="card-title  mt-4">
                  Tous en sons 2, festival musique jeunesse en ligne
                </h5>
                <span className="mb-3 d-inline-block">
                  16/12/2020 - Nos Enchanteurs
                </span>
                <p className="card-text mb-4">
                  Quand on parle du Petit Prince... On le trouve sur son chemin,
                  à 19 heures au 6mic, nouvelle salle de spectacle inaugurée à
                  Aix juste avant le confinement...
                </p>
                <a
                  href="http://www.nosenchanteurs.eu/index.php/2020/12/16/tous-en-sons-2-festival-musique-jeunesse-en-ligne/"
                  target="_blank"
                  className="card--button"
                >
                  Lire l'article
                </a>
              </div>
            </div>
            <div>
              <img
                className="card-img-top w-100 img-bottom"
                src={presse4}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title  mt-4">
                  Petit Prince Slam revisite l'œuvre de Saint-Exupéry
                </h5>
                <span className="mb-3 d-inline-block">
                  15/02/2020 - La Montagne
                </span>
                <p className="card-text mb-4">
                  Le public du théâtre de Cusset, jeune dans sa grande majorité,
                  a rencontré, mercredi soir, un Petit Prince à son image.
                  Revisité par Fafapunk, comédien slameur, et accompagné des
                  musiques de Tomislav Matosin.
                </p>
                <a
                  href="https://www.lamontagne.fr/cusset-03300/loisirs/petit-prince-slam-revisite-luvre-de-saint-exupery_13745174/"
                  target="_blank"
                  className="card--button"
                >
                  Lire l'article
                </a>
              </div>
            </div>
          </MultiCarousel>
        </article>
        <Footer />
      </section>
    </>
  );
};

export default pro;
