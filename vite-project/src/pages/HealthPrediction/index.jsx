import React, {useState, useEffect} from "react";
import axios from "axios";
import UploadImage from "../../components/UploadImage";
import PredictImage from "../../components/PredictImage";
import './styles.css'

const HealthPrediction = () => {



return (
    <div className="health-prediction">
    <UploadImage />
    {/* <PredictImage /> */}
    </div>
)
}

export default HealthPrediction;


