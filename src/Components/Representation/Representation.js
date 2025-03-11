import React from "react";
import poster from "../../assets/img/poster.webp";
import "../Representation/representation.css";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { useRef, useState, useEffect } from "react";
import Table from "./Table/Table.js";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

// import TableColumn from "./Components/Representation/Table/Column.js";

const Representation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, [AOS.init()]);

  const fetchData = async () => {
    const { data } = await axios("./data/data.json").catch((err) =>
      console.log(err)
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);
  return (
    <section
      className="section-representation container-fluid"
      id="representation"
    >
      <h2 className="mb-5 p-0">Les représentations</h2>
      <div className="col-12 row mt-5">
        <div className="col-lg-5 col-12 d-flex align-items-start justify-content-lg-start justify-content-center">
          <img
            className="img-poster"
            src={poster}
            alt="affiche du spectacle"
            data-aos="fade-in"
            data-aos-duration="1500"
          />
        </div>
        <div className="col-lg-7 col-12 p-lg-0 p-5">
          <Table mockData={data} />
        </div>
      </div>
    </section>
  );
};

export default Representation;
