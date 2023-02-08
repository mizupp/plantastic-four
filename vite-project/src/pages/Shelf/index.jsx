// Shelf page
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal";
import './styles.css'

const Shelf = () => {
  const [plants, setPlants] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState("")

  useEffect(() => {
    async function getPlants() {
      const username = sessionStorage.getItem("username");
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      await axios
        .get(`http://localhost:5000/users/${username}/plants`, { headers })
        .then((response) => setPlants(response.data));
    }
    getPlants();
  }, [showModal]);

  const handleClick = (id) => {
    setId(id)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="shelfPage">
    <NavLink to='/search'>Add plant</NavLink>
      <div className="inventory">
        {plants &&
          <main>
            {plants.map((p, i) =>
            <article key={i} className="card" style={{ width: "250px" }}>
              <div>
                <div className="card-image" style={{ height: "250px" }}>
                  <img onClick={() => handleClick(i+1)} alt="icon" src={`${p.plant.imageUrl}` && "/src/assets/img/33.png"} />
                </div>
                <div className="shelf"></div>
                <div className="card-content">
                  <h2>{p.plant.nickname}</h2>
                  <h2>{p.data.names
                  .replace("{", "")
                  .replace("}", "")
                  .replace(/"/g, "")
                  .replace(",", ", ")}</h2>
                </div>
              </div>
            </article>)
            }
          </main>
        }
      </div>
      {showModal && <Modal id={id} handleClose={handleClose} />}
    </div>
    
  );
};

export default Shelf;
