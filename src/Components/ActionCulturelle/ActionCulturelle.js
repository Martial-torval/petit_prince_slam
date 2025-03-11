import React, { useState } from "react";
import "../ActionCulturelle/actionCulturelle.css";
import imgAction from "../../assets/img/action.webp";
import imgAction2 from "../../assets/img/action2.webp";
import Overlay from "react-overlay-component";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import leftArrow from "../../assets/img/left-arrow.png";
import rightArrow from "../../assets/img/right-arrow.png";
import pdfPlanete from "../../assets/img/fp-planete.pdf";
import pdfSlam from "../../assets/img/fp-slam.pdf";
import logoDownloadAc from "../../assets/img/download-ac.png";

const ActionCulturelle = () => {
  const [isOpen, setOverlay] = useState(false);
  const [secondIsOpen, setSecondOverlay] = useState(false);

  // if(isOpen == true) {

  // }

  const closeOverlay = () => setOverlay(false);
  const closeSecondOverlay = () => setSecondOverlay(false);

  const configs = {
    animate: true,
    clickDismiss: true,
    escapeDismiss: true,
    focusOutline: false,
    contentClass: "overlay",
  };

  return (
    <section className="container-fluid section__culturelle" id="ac">
      <h2 className="mb-5 ms-4 ms-4">Les actions culturelles</h2>
      <div className="col-12 row m-0">
        <div className="ac col-lg-6 col-12 d-flex align-items-center flex-column">
          <figure className="hover-img">
            <img
              src={imgAction}
              alt="action culturelle dessine moi une planete"
              className="img-ac opacity-50"
            />
            <figcaption>
              <h3 className="mt-5">S’IL VOUS PLAIT, DECRIS-MOI UNE PLANETE</h3>
              <p className="my-4">
                Le slameur Fafapunk propose un parcours de création collective à
                partir de l’oeuvre d’Antoine&nbsp;de&nbsp;Saint-Exupéry.
              </p>
              <button
                className="mt-2 btnOpenOverlay"
                onClick={() => setOverlay(true)}
              >
                En savoir plus
              </button>
            </figcaption>
            <Overlay
              configs={configs}
              isOpen={isOpen}
              closeOverlay={closeOverlay}
              clickDismiss
            >
              <h3 className="mb-0">S'il vous plait, décris-moi une planète</h3>
              <p className="p-overlay">
                <span>
                  De l’écriture à la scène à la manière du Petit Prince (à
                  partir de 8h)
                </span>{" "}
                <br />
                <br />
                Le slameur Fafapunk propose un parcours de création collective à
                partir de l’oeuvre d’Antoine de Saint-Exupéry. Il s’agit, par
                groupes, d’inventer une nouvelle planète visitée par le petit
                prince au cours de son voyage. Le texte décrira la rencontre,
                sous forme de dialogue, entre le petit prince et les habitants
                des planètes imaginées par les participants. Avec l’aide de
                Fafapunk et de son guitariste, les textes seront mis en scène et
                en musique. Chaque groupe viendra jouer sa création en public
                lors d’un temps de restitution précédé d’une représentation du
                Petit Prince par Fafapunk.
              </p>

              <h4>Modalités</h4>
              <ul>
                <li>
                  Atelier destiné à tout type de public et tout type de
                  structure (scolaires, MJC, centres sociaux, établissements
                  spécialisés tels EHPAD…), dans un espace qui puisse accueillir
                  un groupe et permettre un travail d’écriture.
                </li>
                <li>
                  Nombre de participants : selon le type de public et de
                  structure, entre 10 et 30.
                </li>
                <li>
                  Durée : à partir de 8h réparties sur 2 jours (2h par
                  demi-journée). Durée adaptable en fonction des projets.
                </li>
              </ul>
              <h4>Déroulement</h4>
              <div className="col-12 row">
                <div className="col-lg-6 col-12">
                  <h5>Jour 1</h5>
                  <ol>
                    <li>Présentation de l’atelier par Fafapunk</li>
                    <li>
                      Jeux d’entraînement à l’écriture pour une initiation
                      ludique
                    </li>
                    <li>
                      Par groupes, invention d’une planète et de son personnage
                    </li>
                    <li>Par groupes, écriture (et réécriture) du texte</li>
                  </ol>
                </div>
                <div className="col-lg-6 col-12 pe-lg-5 ps-lg-0 ps-5">
                  <h5>Jour 2</h5>
                  <ol>
                    <li>
                      Mise en musique des textes à partir des indications de
                      rythme et d’ambiance sonore définies par chaque groupe
                    </li>
                    <li>
                      Répétitions (interprétation, intentions, déplacements sur
                      scène, filages)
                    </li>
                  </ol>
                </div>
              </div>

              <p className="m-0">
                <span>
                  La restitution publique aura lieu le jour de la représentation
                  du Petit Prince par Fafapunk.
                </span>
              </p>
              <div className="col-12 row">
                <h4>Objectifs</h4>
                <div className="col-lg-6 col-12">
                  <ul>
                    <li>
                      Rédiger un texte original et inventif à partir d’une
                      situation donnée
                    </li>
                    <li>Travailler le discours direct</li>
                    <li>Dire un texte en donnant vie à son interprétation</li>
                    <li>Prendre la parole devant un public</li>
                    <li>Vivre une aventure collective</li>
                    <li>Transmettre</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12 d-flex align-items-end pe-0">
                  <p className="text-lg-end text-center mt-4 mb-0">
                    Faites votre demande à l'adresse mail suivante :
                    production@goneprod.fr <br />
                    <button className="download_btn mt-3">
                      <a
                        href={pdfPlanete}
                        download="Fiche de présentation - Dessine-moi une planete"
                        className="link-download-overlay"
                      >
                        Fiche de présentation
                        <img
                          src={logoDownloadAc}
                          alt="logo de téléchargement"
                          className="ms-2"
                        />
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              {/* <button
                className="danger"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                close modal
              </button> */}
            </Overlay>
          </figure>
        </div>
        <div className="ac col-lg-6 col-12 d-flex align-items-center flex-column">
          <figure className="hover-img">
            <img
              src={imgAction2}
              alt="initiation au slam"
              className="img-ac opacity-50"
            />
            <figcaption>
              <h3 className="mt-5">ATELIER D'INITIATION AU SLAM/SPOKEN WORD</h3>
              <p className="my-4">
                A l’occasion de notre venue, nous vous proposons un atelier
                d’initiation au slam - spoken word en lien avec le spectacle
                <i> Le Petit Prince Slam !</i>, sous la forme d’un module de
                deux heures avec une classe (à partir du CE2), animé par
                Fafapunk et Tomislav.
              </p>
              <button
                className="mt-2 btnOpenOverlay"
                onClick={() => setSecondOverlay(true)}
              >
                En savoir plus
              </button>
            </figcaption>
            <Overlay
              configs={configs}
              isOpen={secondIsOpen}
              closeOverlay={closeSecondOverlay}
            >
              <h3 className="mb-0">Atelier d'initiation au slam/spoken word</h3>
              <p className="p-overlay">
                <br />
                <br />A l’occasion de notre venue, nous vous proposons un
                atelier d’initiation au slam - spoken word en lien avec le
                spectacle Le Petit Prince Slam !, sous la forme d’un module de
                deux heures avec une classe (à&nbsp;partir du CE2), animé par
                Fafapunk et Tomislav. Il s’agit, individuellement ou par groupes
                de trois, de rédiger un texte et de l’interpréter en musique. La
                restitution est enregistrée en audio afin que les élèves en
                gardent une trace. L’intervention s’articule autour des
                objectifs suivants :
                <br />
                <br />
                Dans le domaine de la maîtrise de la langue :{" "}
              </p>
              <ul>
                <li>
                  Rédiger un texte original et inventif à partir d’une situation
                  donnée{" "}
                </li>
                <li>Travailler le discours direct</li>
              </ul>
              <p>Dans le domaine de l’oralité :</p>
              <ul>
                <li>Lire un texte en donnant vie à son interprétation </li>
                <li>Prendre la parole devant un public</li>
              </ul>
              <h4>Déroulement</h4>
              <div className="col-12">
                <ol>
                  <li>
                    Présentation des artistes, rapide historique du slam et
                    démonstration (15 mn)
                  </li>
                  <li className="mt-lg-0 mt-3">
                    Présentation du contenu de l’atelier et lancement de
                    l’activité (15 mn). Deux thèmes au choix, par classe (le
                    choix du thème est à communiquer aux artistes en amont de
                    l’atelier)
                  </li>
                  <li className="mt-lg-0 mt-3">
                    Travail en groupe : Au cours de son périple, le petit prince
                    visite une planète supplémentaire. Imagine cette planète
                    ainsi que le personnage qui l’habite. Raconte la rencontre
                    entre ce personnage et le petit prince, et rédige leur
                    conversation.
                  </li>
                  <li className="mt-lg-0 mt-3">
                    Travail individuel (pour la restitution, les élèves passent
                    par deux ou trois) : A la manière d’un personnage de
                    l’histoire, raconte-toi : comment tu t’appelles, ton âge, ta
                    famille, tes amis, tes loisirs, ce que tu aimes ou n’aimes
                    pas…
                  </li>
                  <li className="mt-lg-0 mt-3">Temps de rédaction (30 mn)</li>
                  <li className="mt-lg-0 mt-3">Pause (5-10 mn)</li>
                  <li className="mt-lg-0 mt-3">
                    Restitution (40 à 50 mn). Avant de présenter leurs textes,
                    les élèves doivent réfléchir à un accompagnement musical en
                    terme d’ambiance (joyeux, triste, rapide, lent…). Pour
                    chaque groupe, Tomislav improvise à la guitare pendant que
                    les élèves lisent leur texte. Les textes sont lus deux fois
                    : la première pour la classe, la deuxième pour
                    l’enregistrement. Avant d’enregistrer, chaque élève est
                    conseillé dans son interprétation par Fafapunk.
                  </li>
                </ol>
              </div>
              <p className="text-lg-end text-center mt-4 mb-0">
                Faites votre demande à l'adresse mail suivante :
                production@goneprod.fr <br />
                <button className="download_btn mt-3">
                  <a
                    href={pdfSlam}
                    download="Fiche de présentation - Spoken word"
                    className="link-download-overlay"
                  >
                    Fiche de présentation
                    <img
                      src={logoDownloadAc}
                      alt="logo de téléchargement"
                      className="ms-2"
                    />
                  </a>
                </button>
              </p>
            </Overlay>
          </figure>
        </div>
      </div>
      <Carousel
        centerMode="true"
        centerSlidePercentage="100"
        showStatus="false"
        autoPlay="true"
        infiniteLoop="true"
        showThumbs={false}
        className="py-5 container-carousel"
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
          <h3>Témoignage "S'il vous plait, Décris-moi une planete"</h3>
          <span>Laurène S.V. - professeur des écoles - Nonglard (74)</span>
          <p className="text-start mt-3">
            "Les enfants sont entrés avec énormément de facilité dans le projet
            : production d’écrit d'une nouvelle planète, mise en voix sur des
            musiques spécialement créées pour leurs textes, travail de la mise
            en scène. Enfin l'aboutissement fut la montée sur scène. Tous les
            enfants ont voulu dire leur texte et monter sur scène, même les plus
            introvertis qui ne parlaient jusque lors peu en classe. L'évolution
            des élèves après ce spectacle fut impressionnante : confiance en
            soi, expression des ressentis, des émotions, ambiance de classe...
            De plus, ils ont vraiment intégré le message de Saint-Exupéry sur la
            condition humaine et sur l'importance des liens entre les personnes.
            En 17 ans de carrière je n'avais jamais participé à un si beau
            projet et surtout à un projet qui apporte autant aux enfants tant
            sur le développement de la personne, le vivre ensemble que sur les
            apprentissages scolaires : production d'écrit, littérature,
            compréhension, expression des sentiments, travail de l 'oral."{" "}
            <br />
            <br />{" "}
          </p>
        </div>
        <div>
          <h3>Témoignage "Atelier d'initiation au Slam/Spoken Word"</h3>
          <span>
            O. CAYROL - Enseignante CM2 Fleury Marceau - Oullins (69600)
          </span>
          <p className="text-start mt-3">
            "Fafapunk a proposé à nos élèves de CM2 un projet original (écrire
            l'histoire de leur propre planète avec des contraintes différenciées
            selon le profil des élèves) qui a su les motiver et il les a amenés
            à se dépasser avec une bienveillance et un professionnalisme très
            appréciés par l'équipe enseignante. <br /> Merci à lui et à tous ses
            collègues du Petit Prince Slam." <br />
            <br />{" "}
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default ActionCulturelle;
