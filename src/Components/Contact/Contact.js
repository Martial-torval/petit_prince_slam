import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="section--contact">
      <h2 className="mb-5">Contact</h2>
      <div className="row col-12 container-contact">
        <div className="col-4 d-flex flex-column align-items-center">
          <h3 className="contact-title">Goneprod</h3>
          <span>
            7, rue Justin Godart <br /> 69004 Lyon
          </span>
        </div>
        <div className="col-8">
          <h3>Pierre-Marie Sangouard</h3>
          <span>
            Directeur de production & Diffusion <br /> pierre@goneprod
          </span>
          <h3 className="mt-5">Margaux DK</h3>
          <span>
            Administration & Régie de tournée <br /> margaux@goneprod.fr
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
