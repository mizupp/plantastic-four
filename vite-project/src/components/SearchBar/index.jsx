import axios, { all } from "axios";
import React from "react";
import { useState } from "react";
import "./styles.css";

const SearchBar = ({ loadResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const allPlants = await axios.get("http://localhost:5000/plants", {
      headers,
    });
    console.log(allPlants);
    loadResults(allPlants);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
  };

  const filterWord = (word) => {
    let string = word;
    let newString = string[0].toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <div className="search-bar-comp">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          name="searchValue"
          id="search"
          onChange={handleSearchChange}
        />
        <input type="submit" value={"Search"} />
      </form>
    </div>
  );
};

export default SearchBar;
