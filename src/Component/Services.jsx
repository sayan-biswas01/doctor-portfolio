import React from "react";
import expre from "../assets/pictur/doctorexp.jpg";
import medicin from "../assets/pictur/medacin.jpg";
import opration from "../assets/pictur/opration.jpg";

export default function Services() {
  return (
    <div id="services">
      <h1 className="text-center mt-5 "> my servise</h1>
      <div className="row">
        <ul className="col-lg-4 d-block d-lg-flex">
          <img src={medicin} className="w-50" alt="" />
        </ul>
        <ul className="col-lg-4 d-block d-lg-flex">
          <img src={expre} className="w-50" alt="" />
        </ul>
        <ul className="col-lg-4 d-block d-lg-flex">
          <img src={medicin} className="w-50" alt="" />
        </ul>
        <ul className="col-lg-4 d-block d-lg-flex">
          <img src={medicin} className="w-50" alt="" />
        </ul>
        <ul className="col-lg-4 d-block d-lg-flex">
          <img src={expre} className="w-50" alt="" />
        </ul>
        <ul className="col-lg-4 d-block d-lg-flex">
          <img src={medicin} className="w-50" alt="" />
        </ul>
      </div>
    </div>
  );
}
