import React from "react";
import dimg from "../assets/pictur/doctor1.png";
import "../assets/Css/About.css";
import expre from "../assets/pictur/doctorexp.jpg";
import medicin from "../assets/pictur/medacin.jpg";
import opration from "../assets/pictur/opration.jpg";
import opration2 from "../assets/pictur/oprationn2.jpg";

export default function About() {
  return (
    <div className="row" id="about">
      <div
        id="carouselExampleControls"
        className="carousel slide col-lg-6 mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={expre} className="d-block w-100 " alt="" />
          </div>
          <div class="carousel-item">
            <img src={opration2} className="d-block w-100 h-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={opration} className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col-lg-6 fs-3 mt-5">
        <h3 className="text-center about">about me.</h3>
        <h1 className="ml-5 text-primary ">Dr.shaker</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet
          corporis in quidem delectus commodi maiores consectetur, repudiandae
          deserunt aliquid.
        </p>
        <button className="btn-outline-dark"> Learn more</button>

        <h2>
          <img src={expre} className="dimg" alt="" />
          tyiuyifdhgjfhgfhgfhhdsgfg
        </h2>
        <h2>
          <img src={medicin} className="dimg" alt="" />
          dhgjfhgfhgfhhdsgfg
        </h2>
        <h2>
          <img src={expre} className="dimg" alt="" />
          fhgfhgfhhdsgfg
        </h2>
        <h2>
          <img src={medicin} className="dimg" alt="" />
          uerihgfhgfhhdsgfg
        </h2>
      </div>
    </div>
  );
}
