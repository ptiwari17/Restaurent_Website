import React from "react";
import "./bootstrap.min.js";
import "./bootstrap.min.css";
import {img1} from  "./BreakFast1.jpg";

const Card_Practice = () => {
  return (
    <div className="container bg-danger">
      <img className="card-img-top" src="img1" alt="image_alt" />
      <div className="row bg-secondary mt-4 p-4">
        <div className="col-sm-4 bg-primary">
          <div className="card">
            <img className="card-img-top" src={img1} alt="alt" />
            {/* <div className="card-header bg-warning">
              <h1 className="card-title">card header 1</h1>
            </div> */}
            <div className="card-body bg-success">
              <h1 className="card-title">card body 1</h1>
              <p className="card-text"> this is information on card</p>
              <a href="#" className="card-link">
                this is link 1
              </a>
            </div>
            <div className="card-footer bg-danger">
              <h1 className="card-title">card footer 1</h1>
            </div>
          </div>
          <button className="btn btn-success btn-outline-warning">
            Reade More
          </button>
        </div>
        <div className="col-sm-4 bg-info">
          <div className="card">
            <div className="card-header bg-warning">
              <h1 className="card-title">card header 2</h1>
            </div>
            <div className="card-body bg-success">
              <h1 className="card-title">card body 2</h1>
              <p className="card-text"> this is information on card</p>
              <a href="#" className="card-link">
                this is link 2
              </a>
            </div>
            <div className="card-footer bg-danger">
              <h1 className="card-title">card footer 2</h1>
            </div>
          </div>
          <button className="btn btn-success btn-outline-danger">
            Reade More
          </button>
        </div>
        <div className="col-sm-4 bg-dark">
          <div className="card">
            <div className="card-header bg-warning">
              <h1 className="card-title">card header 3</h1>
            </div>
            <div className="card-body bg-success">
              <h1 className="card-title">card body 3</h1>
              <p className="card-text"> this is information on card</p>
              <a href="#" className="card-link">
                this is link 3
              </a>
            </div>
            <div className="card-footer bg-danger">
              <h1 className="card-title">card footer 3</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Practice;
