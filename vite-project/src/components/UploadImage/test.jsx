


// Upload image to check health

import React from 'react';
import axios from 'axios';
class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "",
            predict:  "",
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
        // this.predictData = this.predictData.bind(this);
    }
    


    handleUploadImage(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        console.log(data);
        fetch('http://localhost:5000/predict', { 
            method: 'POST', 
            body: data 
         }).then((response) => { response.json().then((body) => { 
          //console.log(response.json());
             //console.log(Object.entries(response));
             console.log(body.file);
             this.setState({ 
                 imageURL: `http://localhost:5000/${body.file}`,
                 predict: response
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
          {/* <p> Result: {this.state.predict} </p> */}
          <p> Result :
          {Object.keys(this.state.predict)}

          {/* {Object.entries(this.state.predict)} */}
          {/* {this.predict.map(predict => <div>{predict}</div>)} */}
          </p>
          </>
        );
      }
}

export default UploadImage;