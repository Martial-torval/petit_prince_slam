import React, { useEffect } from "react";
import "../Spectacle/spectacle.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Spectacle = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="container--spectacle container-fluid" id="spectacle">
      <div data-aos="fade-in" data-aos-duration="2000">
        <h2 className="mb-2">Le spectacle</h2>
        <span className="m-0 p-italic">
          Pour tous publics ou en scolaire dès 7 ans
        </span>
        <br />
        <span className="mb-lg-5 mb-4 p-italic">Durée : 75 min ou 55 min</span>
        <div className="row col-12">
          <div className="col-lg-6 col-sm-12 col-12 mt-5">
            <p>
              C’est l’histoire d’une rencontre. <br /> <br />
              Celle d’un adulte et d’un enfant, tous deux tombés du ciel. Le
              pilote a cassé son avion au milieu du désert. Seul et en danger de
              mort, il se démène pour le réparer. La rencontre insolite avec le
              petit prince va d'abord le perturber, puis l’apaiser, pour
              finalement le sauver. <br /> <br />
              En quête de vérité, le petit prince a quitté son astéroïde,
              laissant derrière lui sa rose. Un périple qui l'a mené jusqu'à la
              Terre. A travers son regard d’enfant, il raconte au pilote son
              aventure : les étranges planètes visitées et les vaines certitudes
              du monde des adultes. Il lui confie aussi l’amour qu’il éprouve
              pour sa fleur et l’amitié qui le lie à un renard. <br /> <br />
              Amoureux d’oralité, le slameur Fafapunk donne vie de façon inédite
              et sincère au Petit Prince. Associé au musicien compositeur
              Tomislav Matosin, qui incarne à ses côtés les personnages
              iconiques du roman de St-Exupéry, Fafapunk porte à la scène le
              récit culte et universel pour en révéler la valeur philosophique
              et la charge poétique. La mise en scène précise et sobre de
              Mathieu Frey vient étayer une scénographie et une mise en lumière
              qui suggèrent, plus qu'elles ne le figurent, l’univers du Petit
              Prince. <br /> <br />
              Parenthèse onirique pour petits et grands, souvent drôle mais
              aussi émouvante, Le Petit Prince Slam ! est une ode à la vie et à
              la fraternité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spectacle;
