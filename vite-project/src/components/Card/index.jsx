import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Card = (props) => {
  return (
    <article
      className="card"
      style={{ width: props.carWidth ? props.carWidth : "250px" }}
    >
      <div
        className="card-image"
        style={{ height: props.imageHeight ? props.imageHeight : "250px" }}
      >
        <img alt="" src={`${props.imageUrl}`} />
      </div>
      <div className="shelf"></div>

      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      
    </article>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  carWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Card;
