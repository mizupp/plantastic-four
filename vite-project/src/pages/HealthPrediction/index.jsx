import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadImage from "../../components/UploadImage";
import PredictImage from "../../components/PredictImage";
import "./styles.css";

const HealthPrediction = () => {
  return (
    <div className="health-prediction">
      <div className="health-header">
        <h1 className="health-heading">
          Worried about the condition of your plant?
        </h1>
        <p className="health-description">
          Upload an image here and we'll tell you how healthy your plant is!
        </p>
      </div>
      <UploadImage />
      {/* <PredictImage /> */}
    </div>
  );
};

export default HealthPrediction;
