import React from "react";
import PlantInfo from "../PlantInfo";
import "./styles.css";
import Card from "../Card";
import { useState } from "react";
import Modal from '../Modal'

const Inventory = ({plants}) => {
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState("")
  console.log(plants)
  const handleClick = (id) => {
    setId(id)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="inventory">
        {plants &&
          <main>
            {plants.map((p, i) =>
            <article key={i} className="card" style={{ width: "250px" }}>
              <div>
                <div className="card-image" style={{ height: "250px" }}>
                  <img onClick={() => handleClick(i+1)} alt="" src={`${p.plant.imageUrl}` && "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg?f=xl"} />
                </div>
            <div className="shelf"></div>
            <div className="card-content">
              <h2>{p.plant.nickname}</h2>
              <h2>{p.data.names}</h2>
            </div>
            </div>
            </article>)
            }
          </main>
        }
      </div>
      {showModal && <Modal id={id} handleClose={handleClose} />}
    </>
    
  );
};

export default Inventory;
