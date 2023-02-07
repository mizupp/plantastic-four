import React from "react";
import PlantInfo from "../PlantInfo";
import "./index.css";
import Card from "../Card";

const Inventory = ({plants}) => {

  const handleClick = (p) => {
    console.log(p)
  }

  return (
    <div className="inventory">
      {plants && 
        <main>
          {plants.map((p) => <article className="card" style={{ width: "250px" }}>
        <div>
          <div className="card-image" style={{ height: "250px" }}>
            <img onClick={() => handleClick(p)} alt="" src={`${p.imageUrl}` && "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg?f=xl"} />
          </div>
          <div className="shelf"></div>
          <div className="card-content">
            <h2>{p.nickname}</h2>
          </div>
        </div>
    </article>)}
        </main>
      }
    </div>
  );
};

export default Inventory;
