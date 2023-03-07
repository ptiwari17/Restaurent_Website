import React from "react";
import "./bootstrap.min.js";
import "./bootstrap.min.css";
// import img1 from "./BreakFast1.jpg";
// import img2 from "./coffee.jpg";
const Card_Practice = ({ Menudata }) => {
  console.log(Menudata);
  return (
    <div className="container bg-danger">
      <div className="row bg-secondary mt-4 p-4">
        {Menudata.map((curElem) => {
          return (
            <div className="col-sm-6 col-lg-3 bg-primary" key={curElem.id}>
              <img
                className="card-img-bottom"
                src={curElem.image}
                alt="alt_image"
              />
              <div className="card">
                <div className="card-header bg-warning">
                  <h1 className="card-title">{curElem.name}</h1>
                </div>
                <div className="card-body bg-success">
                  <h1 className="card-title">{curElem.category}</h1>
                  <p className="card-text"> {curElem.description}</p>
                  <button className="btn btn-success btn-outline-warning">
                    Reade More
                  </button>
                </div>
                <div className="card-footer bg-danger">
                  <h1 className="card-title">{curElem.price}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card_Practice;
