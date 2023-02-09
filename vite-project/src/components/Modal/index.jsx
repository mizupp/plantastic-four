// Shelf page individual plant info modal

import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./index.css";

const Modal = ({ id, handleClose }) => {
  const [plant, setPlant] = useState(null);
  const [imgFile, setImgFile] = useState(null);
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
        .then((response) => {
          console.log(response.data);
          setPlant(response.data);
        });
    }
    getPlant();
    console.log(plant);
  }, [form]);

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/users/${username}/plants/${id}`, {
        headers,
      })
      .then(() => handleClose());
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
      plant_img: imgFile,
    };
    await axios
      .put(`http://localhost:5000/users/${username}/plants/${id}`, data, {
        headers,
      })
      .then(() => setForm(false));
  };

  const unflat = (string) => {
    string = string
      .replace("{", "")
      .replace("}", "")
      .replace(/"/g, "")
      .replace(",", ", ");
    return string;
  };

  const convertToBase64 = () => {
    const img = document.querySelector(".user-img");
    if (img.files && img.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        const res = e.target.result;
        setImgFile(res);
        console.log(res);
      };
      reader.readAsDataURL(img.files[0]);
    }
  };

  // console.log('image' ,plant.plant.plant_img);

  return (
    <div>
      {plant && (
        <div className="modal">
          <div className="modal-body">
            <button id="close-btn" onClick={handleClose}>
              &#x2715;
            </button>
            {!form ? (
              <div>
                <div className="modal-info">
                  <div className="plant-details">
                    <img
                      src={
                        plant.plant.plant_img == "false"
                          ? plant.plant.avatar
                          : plant.plant.plant_img
                      }
                      alt="image"
                    />
                    <h2>
                      <b>{plant.plant.nickname}</b>
                    </h2>
                    <h2>
                      Added{" "}
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
              <form className="edit-form" onSubmit={handleSubmit}>
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
                <label htmlFor="user-img">Upload an image</label>
                <input
                  type="file"
                  name="user-img"
                  className="user-img"
                  onChange={convertToBase64}
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
