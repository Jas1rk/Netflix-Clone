import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="contant">
        <h1 className="title">Movie Name</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          distinctio vitae deserunt quia eum temporibus nam, quidem minus cumque
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
