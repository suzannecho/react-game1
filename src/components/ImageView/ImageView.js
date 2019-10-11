import React from "react";
import "./ImageView.css";

const ImageView = (props) => (
  <img className={"col-md-3 col-sm-4 col-xs-12 pb-4 imageView img-thumbnail " + (props.gameStatus == "2" ? " gameLost" : (props.gameStatus == "1" ? " gameWon" : ""))} src={process.env.PUBLIC_URL + "/images/" + props.images} alt={props.alt} height={props.imageViewHeight} width={props.imageViewWidth} onClick={props.clickHandler} />
);

export default ImageView;