// Create page

import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import AvatarSelection from "../../components/AvatarSelection";
import axios from 'axios';
import './styles.css'

const Create = ({ testing} ) => {

const avatar = useSelector(state => state.avatar)

const [startDate, setStartDate] = useState(new Date());

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thanks for submitting')
    const newPlant = {
        nickname: e.target.nickname.value,
        purchase_date: e.target.purchase.value,
        water_freq: e.target.watering.value,
        plant_data_id: e.target.plant_data_id.value,
        avatar: avatar
    }
    console.log(newPlant)

    // createNewPlant(newPlant)

    e.target.nickname.value = '';
    e.target.purchase.value = '';
    e.target.watering.value ='';
}

const createNewPlant = async (newPlant) => {
    const username = sessionStorage.getItem('username')
    const headers = {
        Authorization : `Bearer ${sessionStorage.getItem('token')}`
    }
    await axios.post(`http://localhost:5000/users/${username}/plants`, newPlant, {headers})
    // Try and fetch and display all of the users plants data plus this new plant
}

const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);

return (
    <>

  
        <form onSubmit={handleSubmit} className="create-form" >
                <div className="avatar">
                        <div className="AvatarSelection">	
                        <AvatarSelection />
                        </div>	
                </div>
            <div className="createList">
            <h1>Add your plant</h1>
            <div id='nickname' className="input-section">
                <label htmlFor="nickname"><h3>Nickname</h3></label>
                <input type="text" name="nickname" className="nickname" required />
            </div>
            <div id='date-of-purchase' className="input-section">
                <label htmlFor="purchase"><h3>Date of purchase</h3></label>
                <input type="date" name="purchase" className="purchase" required DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                
            </div>
            <div id='watering-frequency' className="input-section">
                <label htmlFor="watering"><h3>Please choose watering frequency (per month)</h3></label>
                <input type="text" name="watering" className="watering" />
            </div>
            <div id='plant-type' className="input-section">
                <label htmlFor="plant_data_id"><h3>Plant Type</h3></label>
                <select name="plant_data_id">
                    <option value="41">Plant 1</option>
                    <option value="42">Plant 2</option>
                    <option value="43">Plant 3</option>
                </select>
            </div>
            <div className="submitCreate">
                <input type="submit" className="submit-btn" value='Add plant' required/>
            </div>
            </div>
        </form>
    </>
    )
}

export default Create;