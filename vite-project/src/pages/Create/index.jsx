import React from "react"
import { useState } from "react"
import DatePicker from "react-datepicker";

import './styles.css'

const Create = () => {

const [newPlant, setNewPlant] = useState(null)
// const [nickname, setNickname] = useState(null);
// const [purchase_date, setPurchaseDate] = useState(null);
// const [water_freq, setWaterFreq] = useState(null);

const [startDate, setStartDate] = useState(new Date());

const handleSubmit = (e) => {
    e.preventDefault();

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
            <span className="header">
                <h1>Add your plant</h1>
                <div className="avatar">
                    <img src="#" alt="Avatar selection" />
                    {/* Allow users to choose a plant avatar */}
                </div>
            </span>
            <div id='nickname' className="input-section">
                <label htmlFor="nickname"><h3>Nickname</h3></label>
                <input type="text" name="nickname" className="nickame" required />
            </div>
            <div id='date-of-purchase' className="input-section">
                <label htmlFor="purchase"><h3>Date of purchase</h3></label>
                <input type="date" name="purchase" className="purchase" required DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                
            </div>
            <div id='watering-frequency' className="input-section">
                <label htmlFor="watering"><h3>Please choose watering frequency (per month)</h3></label>
                <input type="text" name="watering" className="watering" />
            </div>
            <div className="submit">
                <input type="submit" className="submit-btn" value='Add plant' required/>
            </div>
        </form>
    </>
    )
}

export default Create;