import React, { useEffect } from "react";
import "../Team/team.css";
import fafapunk from "../../assets/img/fafapunk1.webp";
import tomislav from "../../assets/img/tomislav.webp";
import phillipe from "../../assets/img/philippe1.webp";
import matthieu from "../../assets/img/matthieu.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section__team" id="team">
      <h2 className="mb-5">L'équipe</h2>
      <div
        className="col-12 row m-0"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="col-lg-6 col-12 p-0 d-flex flex-column">
          <img src={fafapunk} alt="fafapunk pic" className=" team-media" />
          <h3 className="mt-5 mb-0">Fabrice Daboni alias Fafapunk</h3>
          <span className="mb-5">Narration & Slam</span>
          <p className="bio">
            C'est pendant les cours primaires que Fafapunk rédige ses premiers
            textes pour occuper son temps après avoir fini ses exercices. Bercé
            par les albums d'MC Solaar, il écrit pendant son adolescence en
            cachette puis exprime en public pour la première fois au cours d'une
            Slam session à Annecy, la ville où il grandit. Il décide alors de
            s'entourer de musiciens puis donne de nombreux concerts avant
            d'enregistrer, après une dizaine d'années de représentations, 2
            albums. « Au début » et « La mécanique du Mec au Mic ». <br />
            <br /> Au cours de son parcours, il mèle ses textes à l'univers de
            la danse et travaille sur plusieurs spectacles avec différents
            chorégraphes Hip Hop. Dernière création : Tempus avec la Compagnie
            Voltaik (2022). C'est en 2019 qu'il décide de tenter une nouvelle
            aventure : emprunter le texte d'Antoine de Saint Exupéry « Le Petit
            Prince » et crée avec Tomislav Matosin leur version de cette œuvre
            qu'ils appellent : Le Petit Prince Slam. <br />
            <br />
            Aujourd'hui, Fafapunk continue de jouer le Petit Prince Slam, les
            spectacles avec la Compagnie Voltaik et s'oriente également vers la
            création d'un nouveau spectacle pour 2023. A suivre !
          </p>
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 mt-5 p-0 d-flex flex-column">
          <img src={tomislav} alt="fafapunk pic" className=" team-media " />
          <h3 className="mt-5 mb-0">Tomislav Matosin</h3>
          <span className="mb-5">
            Musique & Narration en alternance avec Phillipe Roche
          </span>
          <p className="bio mb-lg-0 mb-5">
            Tomislav aime envisager son parcours artistique sous des formes
            multiples.
            <br />
            <br />A peine a-t-il fini d'interpréter un soldat américan dans le
            spectacle musical <span> Un Eté 44</span> qu'il part sillonner la
            france pour animer des ateliers d'écriture en prison, assurer des
            première parties dans des Zéniths pour son ami Claudio CAPEO, quand
            il ne compose pas des bandes-son pour de la musique à l'image.
          </p>
        </div>
        <div className="col-lg-6 col-12 mt-5  p-0 d-flex flex-column">
          <img src={matthieu} alt="matthieu pic" className=" team-media" />
          <h3 className="mt-5 mb-0">Matthieu Frey</h3>
          <span className="mb-5">Metteur en scène</span>
          <p className="bio mb-lg-0 mb-5">
            Il fait ses premiers pas théâtraux en tant que comédien au sein de
            la Compagnie amateur rattachée au théâtre Bacchus (Besançon) , avant
            de suivre un DEUST Arts du Spectacle à l’Université de Besançon :
            formation au jeu d’acteur, mise en scène, dramaturgie, danse
            contemporaine, travail vocal avec différents metteurs en scene
            (Laurent Hatat, Guillaume Dujardin...) et comediens professionnels.
          </p>
        </div>
        <div className="col-lg-6 col-12 mt-5 p-0 d-flex flex-column">
          <img src={phillipe} alt="fafapunk pic" className=" team-media" />
          <h3 className="mt-5 mb-0">Philippe Roche</h3>
          <span className="mb-5">
            Musique & Narration en alternance avec Tomislav Matosin
          </span>
          <p className="bio mb-lg-0 mb-5">
            Né aux Pays-Bas, ayant passé sa jeunesse au Québec, c'est en France
            qu'il découvre le monde professionnel de la musique. Auteur,
            compositeur, chanteur et guitariste, c'est sous le nom de Neeskens
            que Philippe Roche évolue en tant qu'artiste. Après 3 albums et plus
            de 200 concerts ( tournées à Cuba, aux Pays-Bas, Olympia, Bataclan,
            Nuits de Fourvière..), il intègre l'équipe du spectacle « Le Petit
            Prince Slam » en janvier 2022.
          </p>
        </div>

        <div className="col-lg-3 col-12 mt-5 p-0 d-flex flex-column">
          <h3 className="mb-0">Antoine Hansberger</h3>
          <span className="mb-5">Création lumière</span>
          <p className="bio mb-lg-0 mb-5">
            Formé comme régisseur lumière, Antoine Hanberger travail le pendant
            8 ans à l’Espace Albert Camus de Bron. Il crée la lumière des
            spectacles de la Cie Voltaik, du chanteur Martin Luminet et du conte
            dansé « Vendredi et la vie sauvage ».
          </p>
        </div>
        <div className="col-lg-3 col-12 mt-5 p-0 d-flex flex-column">
          <h3 className="mb-0">Maël Thöni</h3>
          <span className="mb-5">Régisseur</span>
          <p className="mb-lg-0 mb-5">mael@goneprod.fr</p>
        </div>
        <div className="col-lg-3 col-12 mt-5 p-0 d-flex flex-column">
          <h3 className="mb-0">Margaux DK</h3>
          <span className="mb-5">Administration tournée</span>
          <p className="mb-lg-0 mb-5">margaux@goneprod.fr</p>
        </div>
        <div className="col-lg-3 col-12 mt-5 p-0 d-flex flex-column">
          <h3>Pierre-Marie Sangouard</h3>
          <span className="mb-5">Directeur de production</span>
          <p className="mb-lg-0 mb-5">production@goneprod.fr</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
