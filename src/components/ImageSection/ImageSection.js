import React from "react";
import "./ImageSection.css";
import ImageView from "../ImageView";

const ImageSection = (props) => (
	<div className="container">
		<div className="row">
	    {props.images.map((images, index) => {
	      return <ImageView key={index} images={images} alt={images} clickHandler={props.clickHandler} gameStatus={props.gameStatus} />
	    })}
	  </div>
  </div>
);

export default ImageSection;