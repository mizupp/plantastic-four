// Search plants page

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SearchListPlants from "../../components/SearchListPlants/SearchListPlants";
import Grass from "../../components/Grass";
import LoadingPlant from "../../components/LoadingPlant";
import PlantInfo from "../../components/PlantInfo";
import axios from "axios";
import "./styles.css";

const Search = () => {
  const [plant, setPlant] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadResults = (results) => {
    console.log(results);
    setLoading(true);
    setSearchResults(results);
    setLoading(false);
  };

  const getPlant = (plant) => {
    console.log(plant);
    setPlant(plant);
  };

  return (
    <div className="search-page">
      <div>
        <h1>Search Page</h1>
        <h2>Don't know the name of your plant? Search it up here</h2>
        <h2>
          Can't find your plant in the database? Add it{" "}
          <NavLink to="/create">here</NavLink>
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="search-bar">
              <SearchBar loadResults={loadResults} />
            </div>
            <div className="search-list">
              <SearchListPlants
                getPlant={getPlant}
                searchResults={searchResults}
              />
            </div>
          </>
        )}
      </div>

      <div className="search-info">
        {plant && <PlantInfo results={plant} />}
      </div>
    </div>
  );
};

export default Search;
