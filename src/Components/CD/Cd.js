import React, { lazy, Suspense, useState } from "react";
import cdImg from "../../assets/img/cd.webp";
import "../CD/cd.css";
import PaypalCheckoutButton from "../PayPal/PaypalCheckoutButton.js";
import youTubeMusicLogo from "../../assets/img/youtubeMusic.png";
import deezerLogo from "../../assets/img/deezer.svg";
import spotifyLogo from "../../assets/img/spotify.png";
import appleMusicLogo from "../../assets/img/appleMusic.svg";
import bonDeCommande from "../../assets/img/bondecommande.pdf";
// import PayPal from "../PayPal/PayPal.js";
const Cd = () => {
  // let quantity = 1;

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(16.99);
  const renderLoader = () => import("../PayPal/PaypalCheckoutButton");

  // setPrice(price * quantity);

  // const handlePrice = () => {
  //   setQuantity(quantity + 1); // 2
  //   setPrice(price * quantity); // 5 *
  // };

  return (
    <section className="section-cd" id="cd">
      <h2 className="mb-5">Audio du spectacle</h2>
      <div className="col-12 row">
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-start">
          <img alt="cd audio du spectacle" src={cdImg} />
        </div>
        <div className="col-lg-5 col-12 article d-flex flex-column align-items-lg-stretch align-items-center justify-content-center ">
          <div className="d-flex flex-column align-items-stretch">
            <h3 className="mb-1 mt-lg-0 mt-4">Le petit prince slam</h3>
            <p className="mb-1">
              CD audio digipack & livret illustré des photos du spectacle
            </p>
            <span className="fst-italic">
              D'après le Petit prince d'Antoine de Saint Exupéry
            </span>
          </div>

          <div className="d-flex flex-column align-items-stretch">
            <div className="quantity d-flex justify-content-between my-3 pb-3 mt-5">
              <h4>Quantité :</h4>
              <span className="fst-normal text-uppercase">1</span>
            </div>

            <div className="duration d-flex justify-content-between my-3 pb-3 mt-5">
              <h4>Durée :</h4>
              <span className="fst-normal text-uppercase">45 minutes</span>
            </div>

            <div className="artist d-flex justify-content-between  pb-3 my-3">
              <h4>Artistes :</h4>
              <span className="fst-normal text-uppercase">
                Fafapunk & Tomislav Matosin
              </span>
            </div>

            <div className="track d-flex justify-content-between  pb-3 my-3">
              <h4>Nombre de pistes :</h4>
              <span className="fst-normal text-uppercase">14</span>
            </div>

            <div className="price d-flex justify-content-between align-items-center my-3 pb-3 ">
              <h4>Prix :</h4>
              <span className="fw-bold fst-normal text-uppercase">
                {price * quantity} €
              </span>
            </div>
            <Suspense fallback={renderLoader()}>
              <PaypalCheckoutButton />
            </Suspense>

            <div>
              {" "}
              <span className="my-5 opacity-50">
                Vous pouvez aussi commander un ou plusieurs CD par{" "}
                <a href={bonDeCommande} download className="paymentPdf">
                  {" "}
                  bon de commande
                </a>{" "}
                (règlement par chèque ou virement). Pour toute question au sujet
                d'une commande à venir ou en cours : boutique@goneprod.fr
              </span>
            </div>
          </div>

          {/* <div className="paypal_button d-flex justify-content-center my-3 pb-3">
         
          </div> */}
        </div>
      </div>
      <div className="container-musicPlateform my-5 py-5 ps-4">
        <h3 className="mb-5">
          Ecouter aussi sur les plateformes de streaming :
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 mt-5 d-lg-flex d-block">
            <div className="col-lg-3 col-md-6 col-12 justify-content-center d-flex my-lg-0 my-5">
              <a
                href="https://open.spotify.com/album/64fUXpfE3Qf4zpiaXRJ3sB"
                className="text-center"
                target="_blank"
              >
                <img
                  className="logo-music spotify"
                  src={spotifyLogo}
                  alt="Spotify Logo"
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-12 justify-content-center d-flex my-lg-0 my-5">
              <a
                href="https://www.deezer.com/fr/album/374712427"
                className="text-center"
                target="_blank"
              >
                <img
                  className="logo-music deezer"
                  src={deezerLogo}
                  alt="Deezer Logo"
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-6 col-12 justify-content-center d-flex my-lg-0 my-5">
              <a
                href="https://music.apple.com/us/album/le-petit-prince-slam/1654154458"
                className="text-center"
                target="_blank"
              >
                <img
                  className="logo-music"
                  src={appleMusicLogo}
                  alt="Apple Music Logo"
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-12 justify-content-center d-flex my-lg-0 my-5">
              <a
                href="https://music.youtube.com/playlist?list=OLAK5uy_nXvkjzNI_3cbV7BUdIsSuinJP9dw9KcnI"
                className="text-center"
                target="_blank"
              >
                <img
                  className="logo-music"
                  src={youTubeMusicLogo}
                  alt="Youtube Music Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cd;
