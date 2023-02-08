import React, {useState, useEffect} from "react";
import axios from "axios";
import dayjs from "dayjs";
import './index.css'

const Modal = ({ id, handleClose }) => {

    const [plant, setPlant] = useState(null);
    const [form, setForm] = useState(false)

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
    
  }, []);

  const handleDelete = async () => {
      await axios
        .delete(`http://localhost:5000/users/${username}/plants/${id}`, { headers })
        .then(handleClose());
  }

  const handleEdit = () => {
    setForm(true)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
        nickname: e.target.nickname.value,
        water_freq: e.target.water_freq.value,
        purchase_date: e.target.purchase_date.value
    }
    await axios.put(`http://localhost:5000/users/${username}/plants/${id}`, data, { headers })
    .then(handleClose())
  }


    return ( 
        <div>
            {plant && 
            <div className="modal">
                <button onClick={handleClose}>X</button>
               { !form ? 
               <div>
                    <h2>Nickname: {plant.plant.nickname}</h2>
                    <p>Date Purchased: {[dayjs(plant.plant.purchase_date).format('YYYY-MM-DD')]}</p>
                    <p>Latin Name: {plant.data.latin_name}</p>
                    <p className="font-bold">{plant.data.watering}</p>
                    <p></p>
                     <button id="delete-btn" onClick={handleDelete}>Delete</button>
                     <button id="edit-btn" onClick={handleEdit}>Edit</button>
               </div> :

                <form className="edit-form" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="nickname" defaultValue={plant.plant.nickname} />
                    <input type="number" name="water_freq" defaultValue={plant.plant.water_freq} />
                    <input type="date" name="purchase_date" defaultValue={dayjs(plant.plant.purchase_date).format('YYYY-MM-DD')} />
                    <input type="submit" value="submit" />
                  </form> }
            </div>
        }
            
        </div>
     );
}
 
export default Modal;
