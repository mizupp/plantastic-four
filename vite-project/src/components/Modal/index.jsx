import React, {useState, useEffect} from "react";
import axios from "axios";
import './index.css'

const Modal = ({ id, handleClose }) => {

    const [plant, setPlant] = useState(null);
    const username = sessionStorage.getItem("username");
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };

    
  useEffect(() => {
    async function getPlant() {
      
      await axios
        .get(`http://localhost:5000/users/${username}/plants/${id}`, { headers })
        .then((response) => setPlant(response.data));
    }

    getPlant();
    console.log(plant);
  }, []);

  const handleDelete = async () => {
      await axios
        .delete(`http://localhost:5000/users/${username}/plants/${id}`, { headers })
        .then(handleClose());
  }
  


    return ( 
        <div>
            {plant && 
            <div className="modal">
                <button onClick={handleClose}>X</button>
                <h2>{plant.plant.nickname}</h2>
                <p>{plant.plant.purchase_date}</p>
                <p>{plant.data.latin_name}</p>
                 <button>Delete</button>
            </div>
        }
        </div>
     );
}
 
export default Modal;