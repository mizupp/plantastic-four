import React from "react";
import './styles.css';

const LoadingPlant = () => {
    return (
        <div className="wrap">
            <div className="base">
                <div className="flowerpot"></div>
                <div className="blade blade-center"></div>
                <div className="blade blade-left-s"></div>
                <div className="blade blade-right-s"></div>
                <div className="blade blade-left-l"></div>
                <div className="blade blade-right-l"></div>
            </div>
        </div>
    )
};

export default LoadingPlant;