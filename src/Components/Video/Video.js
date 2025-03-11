import React, { useEffect } from "react";
import "./video.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section--video" id="video">
      <h2>Les vidéos</h2>

      <div className="row col-12 h-100">
        <div className="col-lg-6 col-12 d-flex justify-content-end my-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6rihhSvqias"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-aos="fade-in"
            data-aos-duration="1500"
          ></iframe>
        </div>

        <div className="col-lg-6 col-12  d-flex justify-content-lg-start justify-content-center my-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/syNCimI_HCg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-aos="fade-in"
            data-aos-duration="1500"
          ></iframe>
        </div>
        <div className="col-lg-6 col-12  d-flex justify-content-lg-end justify-content-center my-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/K9dOWOp7DyI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-aos="fade-in"
            data-aos-duration="1500"
          ></iframe>
        </div>
        <div className="col-lg-6 col-12  d-flex justify-content-lg-start justify-content-center my-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Smc4bM4PFjM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-aos="fade-in"
            data-aos-duration="1500"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
