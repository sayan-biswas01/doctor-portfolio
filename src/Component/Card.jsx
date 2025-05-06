import React from "react";
import "../assets/Css/Card.css";
import Brian from "../assets/pictur/brian.png";

export default function Card() {
  return (
    <div>
      <section id="feather" className="text-center">
        <div className="row">
          <div className="col-lg-4 d-block d-lg-flex">
            <div className="feather-col ">
              <img src={Brian} className="h-50" alt="brian" />
              <h5 className="font-weight-bold">free to used</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis ad ratione nesciunt, et, deserunt temporibus voluptate
                doloribus cupiditate velit sapiente asperiores explicabo quo
                reprehenderit aspernatur quasi dignissimos quae quos quia?
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-block d-lg-flex">
            <div className="feather-col ">
              <img src={Brian} className="h-50" alt="brian" />
              <h5 className="font-weight-bold">free to used</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis ad ratione nesciunt, et, deserunt temporibus voluptate
                doloribus cupiditate velit sapiente asperiores explicabo quo
                reprehenderit aspernatur quasi dignissimos quae quos quia?
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-block d-lg-flex">
            <div className="feather-col ">
              <img src={Brian} className="h-50" alt="brian" />
              <h5 className="font-weight-bold">free to used</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis ad ratione nesciunt, et, deserunt temporibus voluptate
                doloribus cupiditate velit sapiente asperiores explicabo quo
                reprehenderit aspernatur quasi dignissimos quae quos quia?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
