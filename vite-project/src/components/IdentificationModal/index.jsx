// IdentificationModal component

import React from "react";
import { useState } from "react";
import "./styles.css";

const IdentificationModal = ({ handleClose }) => {
  const [image, setImage] = useState("");
  const [result, setResult] = useState("");

  // async function fetchData() {
  //   let PredictData = await axios.post("http://localhost:5000/predict");
  //   console.log(PredictData);
  //   setPrediction(PredictData.data);
  // }

  // const handleUploadImage = (e) => {
  //   e.preventDefault();

  //   console.log(image);
  // };

  const displayImg = () => {
    const input = document.querySelector(".img-change");
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const sendIdentification = (e) => {
    e.preventDefault();
    const files = [...document.querySelector("input[type=file]").files];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const res = event.target.result;
          console.log(res);
          resolve(res);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then((base64files) => {
      console.log(base64files);

      const data = {
        api_key: "jZF3baeGUJhmEJq5ZZpeKeuLxmDrsmP2zHM7uNnDKaE6mrk5jn",
        images: base64files,
      };

      fetch("https://api.plant.id/v2/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          handleResponse(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };

  const handleResponse = (data) => {
    if (data.is_plant) {
      setResult(`Your plant is a ${data.suggestions[0].plant_name}!`);
    } else {
      setResult(
        "This doesn't look like a plant to us, try taking another photo"
      );
    }
  };

  return (
    <>
      <div className="identification-modal-container">
        <div className="identification-modal">
          <button className="closemodalbtn" onClick={handleClose}>
            X
          </button>
          <div className="information">
            <h1>Please select a file and then click on upload.</h1>
          </div>
          <br />
          <form className="id-upload-form" onSubmit={sendIdentification}>
            <label htmlFor="file-upload" className="select-file-btn">
              Select a file
            </label>
            <input
              className="img-change"
              onChange={displayImg}
              type="file"
              id="file-upload"
            />{" "}
            {image && (
              <img className="health-upload-image" src={image} alt="img" />
            )}
            {image && <button className="upload-btn">Upload</button>}
          </form>
          <p className="upload-img-result">{result}</p>
        </div>
      </div>
    </>
  );
};

export default IdentificationModal;
