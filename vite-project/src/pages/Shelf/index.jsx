// Shelf page
import React, {useState, useEffect} from "react";
import Inventory from "../../components/Inventory";
import AvatarSelection from "../../components/AvatarSelection";
import axios from 'axios'

const Shelf = () => {
    const [plants, setPlants] = useState(null)
    
    useEffect(() => {
        async function getPlants() {
            const username = sessionStorage.getItem('username')
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        await axios.get(`http://localhost:5000/users/${username}/plants`, {headers})
        .then(response => setPlants(response.data))
        }

        getPlants()
        console.log(plants)
    }, [])
    
return (
    <>
    <div className="shelfPage">
        <button>Add Plant</button>
        
       {plants ? <Inventory plants={plants} /> : <div>loading</div>}
        </div>
    </>
)
}

export default Shelf;
