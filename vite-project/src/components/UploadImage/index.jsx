// import React, {useState} from "react"
// import axios from "axios"


// function UploadImage() {
//     const [prediction, setPrediction] = useState("")
//     const [image, setImage] = useState("")

//   handleFileImage(e){

//   }

//   async function fetchData() {
//     let PredictData = await axios.get('http://localhost:5000/predict')
//     console.log(PredictData)
//     setPrediction(PredictData.data)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])


//     return (
//       <>
//       </>
//     );

    

    
// }

// export default UploadImage;




// Upload image to check health

import React, {useState} from "react"
import axios from 'axios';
import {image1} from "../../assets/img"
class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: image1,
            predict:  "",
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
        // this.predictData = this.predictData.bind(this);
    }


    showImage(e){

    }

    
    handleUploadImage(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        this.setState({ 
          imageURL: this.uploadInput.files[0],
       });
        fetch('http://localhost:5000/predict', { 
            method: 'POST', 
            body: data 
         }).then((response) => { response.json().then((body) => { 
          //console.log(response.json());
             //console.log(Object.entries(response));
             console.log(body);
             this.setState({ 
                //  imageURL: `http://localhost:5000/${body.file}`,
               // imageURL: this.uploadInput.files[0],
                 predict: body
             });
           });
         });
        // console.log(Object.keys(this.state.predict))
        console.log(this.state.predict)
      }

    //   async componentDidMount() {
    //     const response = await fetch('http://localhost:5000/predict');
    //     const data = await response.json();
    //     console.log(data)
    //     this.setState({ predict: data })
        
    // }


    render() {
        return (
            <>
          
          <form onSubmit={this.handleUploadImage}>
            <div>
              <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
            <br />
            <div>
              <button>Upload</button>
            </div>
            <img src={this.state.imageURL} alt="img" />

          </form>  
          <p> Result: {this.state.predict} </p>
          {/* {Object.entries(this.state.predict)} */}
          {/* {this.predict.map(predict => <div>{predict}</div>)} */}

          </>
        );
      }
}

export default UploadImage;