import React from 'react'
import axios from 'axios';
class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "",
            predict:  "",
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.predictData = this.predictData.bind(this);
    }
    


    handleUploadImage(ev) {
        ev.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        // data.append('filename', this.fileName.value);
        console.log(data)
        fetch('http://localhost:5000/upload', { 
            method: 'POST', 
            body: data 
        })
        .then((response) => { response.json().then((body) => { 
            console.log(response)
            this.setState({ 
                imageURL: `http://localhost:5000/${body.file}`,
                predict : data
            });
            this.predictData()
          });
        });
        // console.log(Object.entries(this.state.predict))
      }

      async predictData() {
        // GET request using fetch with async/await

        const response =  await fetch('http://localhost:5000/upload');
        console.log(response)
        const data = await response.json();
        // console.log(data)
        this.setState({ predict: data })
        
    }
    //   async componentDidMount() {
    //     // GET request using fetch with async/await
    //     const response = await fetch('http://localhost:5000/upload');
    //     const data = await response.json();
    //     console.log(data)
    //     //this.setState({ predict: data })
        
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
            <img src={this.imageURL} alt="img" />

          </form>  
          {/* <p> Result: {this.state.predict} </p> */}
          <p> Result : 
          {/* {this.predict.map(predict => <div>{predict}</div>)} */}
          </p>
          </>
        );
      }
}

export default UploadImage;