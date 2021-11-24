import React from "react";
import "./Image.css";
import mypics1 from './image/MyNewPortrait.png'

const Image = () => {
  return <div className="image-container">
    <div className="overlay">
      <img className="self-image" src={mypics1}/>
      </div>
  </div>;
};
export default Image;
