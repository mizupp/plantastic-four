import axios, { all } from "axios";
import React from "react";
import { useState } from "react";
import "./styles.css";

const SearchBar = ({ loadResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const allPlants = await axios.get("http://localhost:5000/plants", {
      headers,
    });
    console.log(allPlants.data);
    const arr = [];
    if (inputValue.length > 2) {
      allPlants.data.forEach((plant) => {
        if (plant.names.toLowerCase().includes(inputValue.toLowerCase())) {
          arr.push(plant);
        }
      });
    }
    loadResults(arr);
  };

  // const handleSearchChange = (e) => {
  //   const inputValue = e.target.value;
  //   setSearchTerm(inputValue);
  // };

  return (
    <div className="search-bar-comp">
      <form className="search">
        <input
          className="search-input"
          type="text"
          name="searchValue"
          id="search"
          onChange={handleSubmit}
        />
        {/* <input type="submit" value={"Search"} /> */}
      </form>
    </div>
  );
};

export default SearchBar;
