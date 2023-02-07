// List plant search result component

import React from "react";
import { useState } from "react";
import SearchPlant from "../SearchPlant/SearchPlant";

const SearchListPlants = ({ getPlant, searchResults }) => {
  const handleClick = (plant) => {
    getPlant(plant);
  };

  console.log(searchResults);

  return (
    <>
      {searchResults.map((plant, i) => {
        return <SearchPlant handleClick={handleClick} plant={plant} key={i} />;
      })}
    </>
  );
};

export default SearchListPlants;
