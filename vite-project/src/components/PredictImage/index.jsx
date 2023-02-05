import React, {useState, useEffect} from 'react'
import axios from 'axios';
const PredictImage = () => {
    const [image, setimage] = useState([]);
    const [NewPredict, setNewPredict] = useState();
    
    async function fetchData() {
      let PredictData = await axios.get('http://localhost:5000/upload')
      console.log(PredictData)
      setNewPredict(PredictData.data)
    }
    useEffect(() => {
      fetchData()
    }, [])


    function displayResult() {
        console.log(setNewPredict)
        // return setNewPredict.map(item => (
        // <section id={item.id} key={item.id}>
        // <div >{item.id}: </div>
        // <div >{item.name}</div>
        // </section>))
    }

        return (
          <>
          <p> Results: {displayResult()} </p>
          </>
        );
      
}

export default PredictImage;