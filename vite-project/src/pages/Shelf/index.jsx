// Shelf page
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal";
import dayjs from "dayjs";
import "./styles.css";

const Shelf = () => {
  const [plants, setPlants] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const username = sessionStorage.getItem("username");
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  useEffect(() => {
    async function getPlants() {
      await axios
        .get(`http://localhost:5000/users/${username}/plants`, { headers })
        .then((response) => setPlants(response.data));
    }
    getPlants();
  }, [showModal]);

  const handleClick = (id) => {
    setId(id);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const updateLastWater = async (id) => {
    const data = {
      last_watered: dayjs().format("YYYY-MM-DD"),
    };
    await axios.put(
      `http://localhost:5000/users/${username}/plants/${id}`,
      data,
      { headers }
    );
  };

  return (
    <div className="shelfPage">
      <NavLink className="addplant" to="/search">
        Add plant
      </NavLink>
      <div className="inventory">
        {plants && (
          <main>
            {plants.map((p, i) => (
              <article key={i} className="card" style={{ width: "250px" }}>
                <div>
                  <div className="card-image" style={{ height: "300px" }}>
                    <img
                      onClick={() => handleClick(i + 1)}
                      alt="icon"
                      src={p.plant.avatar}
                    />
                  </div>
                  <div className="shelf"></div>
                  <div className="card-content">
                    <h2>{p.plant.nickname}</h2>
                    <h2>
                      {p.data.names
                        .replace("{", "")
                        .replace("}", "")
                        .replace(/"/g, "")
                        .replace(",", ", ")}
                    </h2>
                    <button
                      onClick={() => updateLastWater(i + 1)}
                      className="water-button"
                    >
                      Water me!
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </main>
        )}
      </div>
      {showModal && <Modal id={id} handleClose={handleClose} />}
    </div>
  );
};

export default Shelf;
