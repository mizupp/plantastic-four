// Health page modal

import React, { useState, useEffect } from "react";
import axios from "axios";

function UploadImage() {
  // const [prediction, setPrediction] = useState("");
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

      fetch("https://api.plant.id/v2/health_assessment", {
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
      if (data.health_assessment.is_healthy) {
        setResult("This plant looks healthy! Keep doing what you're doing");
      } else if (!data.health_assessment.is_healthy) {
        switch (data.health_assessment.diseases[0].name) {
          case "abiotic":
            setResult("abiotic");
            break;
          case "water-related issue":
            setResult(
              "Looks like your plant could do with more water! Consider increasing the frequency in which you water your plant."
            );
            break;
          case "water excess or uneven watering":
            setResult(
              "Looks like you've been watering your plant a little too much! Consider decreasing the frequency in which you water your plant."
            );
            break;
          case "water deficiency":
            setResult(
              "Looks like your plant could do with more water! Consider increasing the frequency in which you water your plant."
            );
            break;
          case "nutrient-related issue":
            setResult(
              "Your plants needs more nutrients. Change the soil or add some fertiliser"
            );
            break;
          case "nutrient deficiency":
            setResult(
              "Your plants needs more nutrients. Change the soil or add some fertiliser"
            );
            break;
          case "light-related issue":
            setResult(
              "Your plant is not getting enough light. If possible, move it to a location that gets more sun!"
            );
            break;
          case "light excess":
            setResult(
              "Your plant is getting too much light! Move it to a shadier spot."
            );
            break;
          case "Bacteria":
            setResult("Your plant has a bacterial disease.");
            break;
          default:
            setResult(
              `Your plant has ${JSON.stringify(
                data.health_assessment.diseases[0].name
              )}`
            );
            break;
        }
      }
    } else {
      setResult("Sorry, this doesn't look like a plant to us!");
    }
    console.log(result);
  };

  return (
    <>
      <form className="health-upload-form" onSubmit={sendIdentification}>
        <label htmlFor="file-upload" className="health-file-upload">
          Select a file
        </label>
        <input
          className="img-change"
          onChange={displayImg}
          type="file"
          id="file-upload"
        />{" "}
        {image && <img className="health-upload-image" src={image} alt="img" />}
        {image && <button className="health-file-upload ">Upload</button>}
      </form>
      <div className="health-result">{result}</div>
    </>
  );
}

export default UploadImage;

// Upload image to check health

// import React, { useState } from "react";
// import axios from "axios";
// import { image1 } from "../../assets/img";
// class UploadImage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageURL: image1,
//       predict: "",
//     };
//     this.handleUploadImage = this.handleUploadImage.bind(this);
//     // this.predictData = this.predictData.bind(this);
//   }

//   showImage(e) {}

//   handleUploadImage(ev) {
//     ev.preventDefault();
//     const data = new FormData();
//     data.append("file", this.uploadInput.files[0]);
//     this.setState({
//       imageURL: this.uploadInput.files[0],
//     });
//     fetch("http://localhost:5000/predict", {
//       method: "POST",
//       body: data,
//     }).then((response) => {
//       response.json().then((body) => {
//         //console.log(response.json());
//         //console.log(Object.entries(response));
//         console.log(body);
//         this.setState({
//           //  imageURL: `http://localhost:5000/${body.file}`,
//           // imageURL: this.uploadInput.files[0],
//           predict: body,
//         });
//       });
//     });
//     // console.log(Object.keys(this.state.predict))
//     console.log(this.state.predict);
//   }

//   //   async componentDidMount() {
//   //     const response = await fetch('http://localhost:5000/predict');
//   //     const data = await response.json();
//   //     console.log(data)
//   //     this.setState({ predict: data })

//   // }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleUploadImage}>
//           <div>
//             <input
//               ref={(ref) => {
//                 this.uploadInput = ref;
//               }}
//               type="file"
//             />
//           </div>
//           <br />
//           <div>
//             <button>Upload</button>
//           </div>
//           {/* <img src={this.state.imageURL} alt="img" /> */}
//         </form>
//         <p> Result: {this.state.predict} </p>
//         {/* {Object.entries(this.state.predict)} */}
//         {/* {this.predict.map(predict => <div>{predict}</div>)} */}
//       </>
//     );
//   }
// }

// export default UploadImage;
