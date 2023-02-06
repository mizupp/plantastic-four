// Create page

import React from "react"
import { useState } from "react"
import DatePicker from "react-datepicker";
import AvatarSelection from "../../components/AvatarSelection";
import './styles.css'

const Create = ({ testing} ) => {

const [newPlant, setNewPlant] = useState(null)

const [startDate, setStartDate] = useState(new Date());

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thanks for submitting')
    console.log(e.target.nickname.value)
    console.log(e.target.purchase.value)
    console.log(e.target.watering.value)

    setNewPlant({
        nickname: e.target.nickname.value,
        purchase_date: e.target.purchase.value,
        water_freq: e.target.watering.value,
    })

    createNewPlant(newPlant)

    e.target.nickname.value = '';
    e.target.purchase.value = '';
    e.target.watering.value ='';
}

const createNewPlant = async (newPlant) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlant)
    }
    // Try and fetch and display all of the users plants data plus this new plant
}

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
            <div className="submitCreate">
                <input type="submit" className="submit-btn" value='Add plant' required/>
            </div>
            </div>
        </form>
    </>
    )
}

export default Create;