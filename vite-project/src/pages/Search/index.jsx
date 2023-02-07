// Search plants page

import React, { useEffect } from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SearchListPlants from "../../components/SearchListPlants/SearchListPlants";
import Grass from "../../components/Grass";
import LoadingPlant from "../../components/LoadingPlant";
import axios from "axios";
import "./styles.css";

const Search = () => {
  // Some dummy data to test functionality before we connect to database
  // const [plants, setPlants] = useState([
  //     {
  //         id: 1,
  //         name: "Snake Plant",
  //         min_temp: 5,
  //     },
  //     {
  //         id: 2,
  //         name: "Peace Lilly",
  //         min_temp: 15,
  //     },
  //     {
  //         id: 3,
  //         name: "Marble Queen",
  //         min_temp: 2,
  //     },
  //     {
  //         id: 4,
  //         name: "English Ivy",
  //         min_temp: 10,
  //     },
  //     {
  //         id: 5,
  //         name: "Boston Fern",
  //         min_temp: 8,
  //     }
  // ])

  // const [searchResults, setSearchResults] = useState([
  //     {
  //         id: 1,
  //         name: "Snake Plant",
  //         min_temp: 5,
  //     },
  //     {
  //         id: 2,
  //         name: "Peace Lilly",
  //         min_temp: 15,
  //     },
  //     {
  //         id: 3,
  //         name: "Marble Queen",
  //         min_temp: 2,
  //     },
  //     {
  //         id: 4,
  //         name: "English Ivy",
  //         min_temp: 10,
  //     },
  //     {
  //         id: 5,
  //         name: "Boston Fern",
  //         min_temp: 8,
  //     }
  // ])

  const [plants, setPlants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  //   async function loadPlants() {
  //     const headers = {
  //       Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //     };
  //     const resp = await axios.get("http://localhost:5000/plants", { headers });
  //     console.log(resp.data);
  //     setSearchResults(resp.data);
  //   }

  //   useEffect(() => {
  //     setLoading(true);
  //     loadPlants();
  //     setLoading(false);
  //   }, []);

  console.log(plants);

  const loadResults = (results) => {
    console.log(results);
    setLoading(true);
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <div className="search-bar">
        <SearchBar plants={plants} loadResults={loadResults} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="search-list">
            <SearchListPlants searchResults={searchResults} />
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
