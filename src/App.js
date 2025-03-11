import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import HeroHeader from "./Components/Hero/HeroHeader.js";
import Spectacle from "./Components/Spectacle/Spectacle.js";
import Team from "./Components/Team/Team.js";
import Representation from "./Components/Representation/Representation.js";
import ActionCulturelle from "./Components/ActionCulturelle/ActionCulturelle.js";
import Cd from "./Components/CD/Cd.js";
import Video from "./Components/Video/Video.js";
import Footer from "./Components/Footer/Footer.js";
import Pro from "./Components/Pro/Pro.js";
import ScrollToTop from "react-scroll-to-top";
import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import ScrollTop from "./Components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/espaceProfessionnel" element={<Pro />} />
      </Routes>
      {/* <HeroHeader />,
      <Spectacle />,
      <Team />,
      <Video />,
      <Representation />,
      <ActionCulturelle />,
      <Cd />,
      <Footer />,
      <ScrollToTop />, */}
    </div>
  );
}

export default App;
