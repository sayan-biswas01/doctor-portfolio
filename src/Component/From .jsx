import React from "react";
import "../assets/Css/Feom.css";
import Whatsapp from "../assets/pictur/whatsapp.png";
import email from "../assets/pictur/email .png";
import Gps from "../assets/pictur/gps.png";

export default function From() {
  return (
    <div id="contruct">
      <div className="row mt-5 bg-info">
        <div className="col-lg-5 mt-6">
          <h1 className="left">Get in touch</h1>
          <p className="left fs-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, sint atque, nisi asperiores delectus iste minus nam
            necessitatibus harum soluta iusto possimus incidunt, ad modi iure
            culpa dolore obcaecati sapiente.
          </p>
          <div className="col-lg-1">
            <img src={Whatsapp} className="imagg" alt="" />
            <img src={email} className="imagg mt-5 " alt="" />
            <img src={Gps} className="imagg mt-5" alt="" />
          </div>

          <p className="fs-4 left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            amet.
          </p>
        </div>
        <div className="col-lg-6 ml-5 mt-5 llp">
          <h3 className="mt-3 text-center fst-italic fw-bold">contruct my</h3>
          <form className="from">
            <div className="mt-5">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter a name:"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="Email"
                id="Email"
                name="Email"
                placeholder="Enter a Email:"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="subject">subject:</label>
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="subject:"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="details">Contract details:</label>
              <textarea name="details" placeholder="your message:"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark fs-3  ">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
