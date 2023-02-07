// List plant search result component

import React from "react";
import SearchPlant from "../SearchPlant/SearchPlant";

const SearchListPlants = ({ searchResults }) => {
  const result = searchResults.map((plant) => (
    <SearchPlant key={plant.id} plant={plant} return />
  ));

  const content = result?.length ? (
    result
  ) : (
    <article>
      <p>No matching Plants</p>
    </article>
  );

  return (
    <div>
      <h3>{content}</h3>
    </div>
  );
};

export default SearchListPlants;
