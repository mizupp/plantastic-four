// Shelf page individual plant info modal

import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./index.css";

const Modal = ({ id, handleClose }) => {
  const [plant, setPlant] = useState(null);
  const [form, setForm] = useState(false);

  const username = sessionStorage.getItem("username");
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  useEffect(() => {
    async function getPlant() {
      await axios
        .get(`http://localhost:5000/users/${username}/plants/${id}`, {
          headers,
        })
        .then((response) => setPlant(response.data));
    }

    getPlant();
  }, []);

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/users/${username}/plants/${id}`, {
        headers,
      })
      .then(handleClose());
  };

  const handleEdit = () => {
    setForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nickname: e.target.nickname.value,
      water_freq: e.target.water_freq.value,
      purchase_date: e.target.purchase_date.value,
    };
    await axios
      .put(`http://localhost:5000/users/${username}/plants/${id}`, data, {
        headers,
      })
      .then(handleClose());
  };

  function unflat(string) {
    string = string
      .replace("{", "")
      .replace("}", "")
      .replace(/"/g, "")
      .replace(",", ", ");
    return string;
  }

  return (
    <div>
      {plant && (
        <div className="modal">
          <div className="modal-body">
            <button onClick={handleClose}>X</button>
            {!form ? (
              <div>
                <div className="modal-info">
                  <div className="plant-details">
                    <img src={plant.plant.avatar} alt="icon" />
                    <h2>{plant.plant.nickname}</h2>
                    <h2>
                      Purchased{" "}
                      {dayjs(plant.plant.purchase_date).format("DD/MM/YYYY")}
                    </h2>
                    <h3>
                      Last Watered{" "}
                      {dayjs(plant.plant.last_watered).format("DD/MM/YYYY")}
                    </h3>
                    <h3>
                      Next water{" "}
                      {dayjs(plant.plant.last_watered)
                        .add(plant.plant.water_freq, "day")
                        .format("DD/MM/YYYY")}
                    </h3>
                  </div>
                  <div className="plant-data">
                    <p>
                      <b>Common names</b> {unflat(plant.data.names)}
                    </p>
                    <p>
                      <b>Category</b> {plant.data.category}
                    </p>
                    <p>
                      <b>Latin Name</b> {plant.data.latin_name}
                    </p>
                    <p>
                      <b>Climate</b> {plant.data.climate}
                    </p>
                    <p>
                      <b>Origin</b> {plant.data.origin}
                    </p>
                    <p>
                      <b>Pests</b> {unflat(plant.data.pests)}
                    </p>
                    {plant.data.soil && (
                      <p>
                        <b>Soil</b> {plant.data.soil}
                      </p>
                    )}
                    <p>
                      <b>Ideal Light</b> {plant.data.ideal_light}
                    </p>
                    <p>
                      <b>Tolerated Light</b> {plant.data.tolerated_light}
                    </p>
                    <p>
                      <b>Temparatures</b>{" "}
                      {`${plant.data.min_temp}-${plant.data.max_temp}`}&deg;C
                    </p>
                    <p className="font-bold">{plant.data.watering}</p>
                  </div>
                </div>

                <button id="edit-btn" onClick={handleEdit}>
                  Edit
                </button>
                <button id="delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            ) : (
              <form className="edit-form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="nickname">Nickname </label>
                <input
                  type="text"
                  name="nickname"
                  defaultValue={plant.plant.nickname}
                />
                <br />
                <br />
                <label htmlFor="water_freq">Watering Frequency </label>
                <input
                  type="number"
                  name="water_freq"
                  defaultValue={plant.plant.water_freq}
                />
                <br />
                <br />
                <label htmlFor="purchase_date">Purchase Date </label>
                <input
                  type="date"
                  name="purchase_date"
                  defaultValue={dayjs(plant.plant.purchase_date).format(
                    "YYYY-MM-DD"
                  )}
                />
                <br />
                <br />
                <input type="submit" value="Edit" />
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
