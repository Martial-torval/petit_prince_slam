import { useRef, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../Menu/menu.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Menu = () => {
  const [open, setOpen] = useState(false); // Open = valeur par défault, SetOpen = nouvelle valeur
  let navigation = useRef(null);
  let spectacleLink = useRef(null);

  useEffect(() => {
    const nav = navigation.current;
    //  const anchorUrlLink = () => {
    //    useEffect(() => {});
    //    //   let anchor =
    //    //   window.location.href =
    //  };

    // spectacleAnchor.href
    //  let anchor = window.location.href = "#spectacle";
    // Récupère la référence actuelle de l'élément Navigation
    open ? nav.classList.add("open") : nav.classList.remove("open"); // (?) Si open == true (:) Sinon
  }, [open]);

  // function handleClick(event) {
  //   navigate("/espace-professionnel");
  // }

  return (
    <>
      <MenuIcon
        onClick={() => setOpen(!open)}
        className={open ? "burgerMenu d-none" : "burgerMenu d-block"}
        fontSize="large"
      />
      <CloseIcon
        onClick={() => setOpen(!open)}
        className={open ? "burgerMenu d-block" : "burgerMenu d-none"}
        fontSize="large"
        id="closeMenu"
      />
      <nav id="nav" ref={navigation}>
        <ul className="ps-5">
          <li className="nav-item mb-2">
            <AnchorLink
              href="#spectacle"
              ref={spectacleLink}
              // onClick={anchorUrlLink}
            >
              Le spectacle
            </AnchorLink>
          </li>
          <li className="nav-item mb-2">
            <AnchorLink href="#team">L'équipe</AnchorLink>
          </li>
          <li className="nav-item mb-2">
            <AnchorLink href="#video">Les vidéos</AnchorLink>
          </li>
          <li className="nav-item mb-2">
            <AnchorLink href="#representation">Les représentations</AnchorLink>
          </li>
          <li className="nav-item mb-2">
            <AnchorLink href="#ac">Actions culturelles</AnchorLink>
          </li>

          <li className="nav-item mb-2">
            <AnchorLink href="#cd">Audio du spectacle</AnchorLink>
          </li>
          <li className="nav-item mb-2">
            <AnchorLink href="#footer">Contact</AnchorLink>
          </li>
          <li className="nav-item mb-2 link-pro">
            <Link to="/espace-professionnel">Espace professionnel</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
