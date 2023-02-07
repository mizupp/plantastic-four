import React from "react";
import PlantInfo from "../PlantInfo";
import "./index.css";

const Inventory = ({plants}) => {
  return (
    <div className="inventory">
      <main>
        <PlantInfo />
   
      </main>
    </div>
  );
};

export default Inventory;
