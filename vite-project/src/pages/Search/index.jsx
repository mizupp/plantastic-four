// Search plants page

import React, { useEffect } from "react"
import { useState} from "react"
import SearchBar from "../../components/SearchBar"
import ListPlants from "../../components/ListPlants"
import axios from 'axios'
import './styles.css'

// Some dummy data to test functionality before we connect to database

// This can be replaced by a fetchPlantData function
const plants = [

]


const Search = () => {

const [plants, setPlants] = useState([ 
    {
        id: 1,
        name: "Snake Plant",
        min_temp: 5,
    },
    {
        id: 2,
        name: "Peace Lilly",
        min_temp: 15,
    },
    {
        id: 3,
        name: "Marble Queen",
        min_temp: 2,
    },
    {
        id: 4,
        name: "English Ivy",
        min_temp: 10,
    },
    {
        id: 5,
        name: "Boston Fern",
        min_temp: 8,
    }
])

const [searchResults, setSearchResults] = useState([
    {
        id: 1,
        name: "Snake Plant",
        min_temp: 5,
    },
    {
        id: 2,
        name: "Peace Lilly",
        min_temp: 15,
    },
    {
        id: 3,
        name: "Marble Queen",
        min_temp: 2,
    },
    {
        id: 4,
        name: "English Ivy",
        min_temp: 10,
    },
    {
        id: 5,
        name: "Boston Fern",
        min_temp: 8,
    }
])

// When we have a getPlant component to fetch plant data

// useEffect(() => {
//     getPlants().then(json => {
//         setPlants(json)
//         return json
//     }).then(json => {
//         setSearchResults(json)
//     })
// })

useEffect(() => {
    setPlants(plants)
    setSearchResults(plants)
}, [])

console.log(plants)

    return (
        <div className="search-page">
            <h1>Search Page</h1>
            <SearchBar plants={plants} setSearchResults= {setSearchResults} />
            <ListPlants searchResults={searchResults} />
        </div>
    )
}

export default Search;