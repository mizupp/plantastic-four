import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Card = (props) => {
  return (
    
    <article className="card" style={{ width: props.carWidth ? props.carWidth : "250px" }}>
      {props && <div>
        <div className="card-image" style={{ height: props.imageHeight ? props.imageHeight : "250px" }}>
          <img alt="" src={`${props.props.imageUrl}` && "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg?f=xl"} />
        </div>
        <div className="shelf"></div>
        <div className="card-content">
          <h2>{props.props.nickname}</h2>
        </div>
      </div>}
    </article>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  carWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  nickname: PropTypes.string.isRequired,
};

export default Card;
