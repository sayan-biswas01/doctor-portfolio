import React from "react";
import "../assets/Css/Home.css";
import pik from "../assets/pictur/doctor 3.png";
import pok from "../assets/pictur/doctor1.png";
import pjk from "../assets/pictur/doctor2.png";

export default function Home() {
  return (
    <div id="home">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="carousel-item active ">
            <img
              src={pok}
              className="d-block"
              style={{ height: "800px ", float: "right", marginRight: "50px" }}
              alt=""
            />
            <div class="   d-md-block fastdr">
              <h2 className="fs-1 fst-italic fw-bold">Dr.Dr.name</h2>
              <h4>Health is welth</h4>
              <h1>we care about your helth</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde ipsam quis <br />
                laboriosam rem praesentium voluptatibu doloremque consequuntur
                provident aliquam.
              </p>
              <button className="btn btn-primary fs-3 mt-3">Appointment</button>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={pik}
              className="d-block"
              style={{ height: "800px ", float: "right", marginRight: "50px" }}
              alt=""
            />
            <div class="   d-md-block fastdr">
              <h2 className="fs-1 fst-italic fw-bold">Dr.Dr.name</h2>
              <h1>gsdkfjkgjgjkfdjg</h1>
              <h2>fkjksdjgfdksajgjfanjghjjfdkgjfdanjnnjf</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde ipsam quis <br />
                laboriosam rem praesentium voluptatibu doloremque consequuntur
                provident aliquam.
              </p>
              <button className="btn btn-primary fs-3 mt-3">Appointment</button>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={pjk}
              className="d-block"
              style={{ height: "800px ", float: "right", marginRight: "50px" }}
              alt=""
            />
            <div class="   d-md-block fastdr">
              <h2 className="fs-1 fst-italic fw-bold">Dr.Dr.name</h2>
              <h1>Health is welth</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde ipsam quis <br />
                laboriosam rem praesentium voluptatibu doloremque consequuntur
                <br />
                provident aliquam. Lorem ipsum dolor sit amet.nfgdjghfdhhk
              </p>
              <button className="btn btn-primary fs-3 mt-3">Appointment</button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
