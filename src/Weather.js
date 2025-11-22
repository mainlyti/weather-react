import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 4:44 PM</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <p>Img goes here</p>
          <span className="temperature">45</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 3 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
