// Shelf page
import React, {useState, useEffect} from "react";
import Inventory from "../../components/Inventory";
import AvatarSelection from "../../components/AvatarSelection";
import axios from 'axios'

const Shelf = () => {
    const [plants, setPlants] = useState(null)
    // onst [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
    // const getPlants = async () => {
    //     const username = sessionStorage.getItem('username')
    //     const headers = {
    //         Authorization: `Bearer ${sessionStorage.getItem('token')}`
    //     }
    //     await axios.get(`http://localhost:5000/users/${username}/plants`, {headers})
    //     .then(response => setPlants(response.data))
    //     console.log(plants)
    // }

    useEffect(() => async function getPlants() {
        const username = sessionStorage.getItem('username')
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        await axios.get(`http://localhost:5000/users/${username}/plants`, {headers})
        .then(response => setPlants(response.data))
        console.log(plants)
    },[])
    
return (
    <>
        <button>Add Plant</button>
        <Inventory />
        
    </>
)
}

export default Shelf;