// Create page

import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import AvatarSelection from "../../components/AvatarSelection";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Create = ({ testing }) => {
  const [imgFile, setImgFile] = useState(false);
  const navigate = useNavigate();

  const avatar = useSelector((state) => state.avatar);
  const plant = useSelector((state) => state.plant);

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Thanks for submitting");

    const newPlant = {
      nickname: e.target.nickname.value,
      purchase_date: e.target.purchase.value,
      plant_img: imgFile,
      water_freq: e.target.watering.value,
      plant_data_id: plant.id,
      avatar: avatar,
    };
    console.log(newPlant);

    await createNewPlant(newPlant);

    e.target.nickname.value = "";
    e.target.purchase.value = "";
    e.target.watering.value = "";

    navigate("/shelf");
  };

  const createNewPlant = async (newPlant) => {
    const username = sessionStorage.getItem("username");
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    await axios.post(
      `http://localhost:5000/users/${username}/plants`,
      newPlant,
      { headers }
    );
    // Try and fetch and display all of the users plants data plus this new plant
  };

  const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);

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

  return (
    <>
      <div className="create-plant-page">
        <form onSubmit={handleSubmit} className="create-form">
          <div className="avatar">
            <div className="AvatarSelection">
              <AvatarSelection />
            </div>
          </div>
          <div className="createList  drop-shadow-lg">
            <h1>Add your plant</h1>
            <div id="nickname" className="input-section">
              <label htmlFor="nickname">
                <h3>Nickname</h3>
              </label>
              <input
                type="text"
                name="nickname"
                className="nickname"
                required
              />
            </div>
            <div id="date-of-purchase" className="input-section">
              <label htmlFor="purchase">
                <h3>Date of purchase</h3>
              </label>
              <input
                type="date"
                name="purchase"
                className="purchase"
                required
                DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div id="watering-frequency" className="input-section">
              <label htmlFor="watering">
                <h3>Watering frequency</h3>
              </label>
              <input type="text" name="watering" className="watering" />
            </div>
            <div id="user-img-upload" className="input-section">
              <label htmlFor="user-img">
                <h3>Upload an image</h3>
              </label>
              <input
                onChange={convertToBase64}
                type="file"
                name="user-img"
                className="user-img"
              />
            </div>
            <div id="plant-type" className="input-section">
              <label>
                <h3>Plant Type</h3>
              </label>
              <h3>{plant.name}</h3>
            </div>
            <div className="submit-create">
              <input
                type="submit"
                className="submit-btn"
                value="Add plant"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
