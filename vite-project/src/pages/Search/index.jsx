// Search plants page

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import IdentificationModal from "../../components/IdentificationModal";
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
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

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
    <>
      <div className="search-page">
        <div>
          <h1>Search Page</h1>
          <p>
            {" "}
            Please use the search bar to find the plant that you are looking
            for. You can add this plant to your shelf
          </p>

          <h2>
            Can't find the plant you are looking for? Upload an image: <br />
            <br />
            <button className="here-link" onClick={() => setShowModal(true)}>
              here
            </button>
          </h2>
          <h2>
            Can't find your plant in the database? Add it:
            <br />
            <br />
            <NavLink className="here-link" to="/create">
              here
            </NavLink>
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
      {/* {showModal && <IdentificationModal />} */}
      {showModal && <IdentificationModal handleClose={handleClose} />}
    </>
  );
};

export default Search;
