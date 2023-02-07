import React, { useState, useEffect } from "react";
import axios from "axios";
const HealthPrediction = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState([{}]);

  async function fetchData() {
    let predictData = await axios.get("http://127.0.0.1:5000/predict");
    setList(predictData.data);
  }

  function submitFormData(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/predict", {
        name: setData,
      })
      .then(() => {
        fetchData();
        e.target.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const predictImage = async () => {
  // 	try {
  // 	  const url = "https://localhost:5000/predict";
  // 	  const payload = {
  // 		// file: inputFile,

  // 	  };
  // 	  const headers = {
  // 		"Content-Type": "application/json",
  // 	  };
  // 	  const { data } = await axios.post(url, payload, { headers });
  // 	  console.log(data);
  // 	} catch (error) {
  // 	  console.log(error);
  // 	}
  //   };

  //   useEffect(() => {
  // 	predictImage()
  // 	console.log("top")
  //   }, [])

  // useEffect(() => {
  //     fetch("/predict").then(
  //         res => res.json()

  //     ).then(
  //         data => {
  //             setData(data)
  //             console.log(data)
  //         }
  //     )
  // }, [])

  function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output-image");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  return (
    <>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Add a food!"
      ></input>
      <button className="form-control btn btn-secondary btn-sm mb-2">
        Add a new food
      </button>

      <h1> HealthPrediction page</h1>
      <section className="" id="test">
        <h3 className=""> Test Your Plants</h3>
        <div className="" style={{ justifyContent: "center" }}>
          <form
            onSubmit={submitFormData}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-group text-center">
              <label htmlFor="exampleFormControlFile1">
                <b>Input a file</b>
              </label>
              <input
                type="file"
                name="file"
                className="form-control-file"
                id="inputImage"
                onChange={(e) => setData(e.target.value)}
                required
              />
              <br />
              <button className="btn" type="submit">
                {" "}
                Predict{" "}
              </button>
            </div>
          </form>
        </div>
        <img id="output-image" className="rounded mx-auto d-block" />
        <br />
      </section>
    </>
  );
};

export default HealthPrediction;
