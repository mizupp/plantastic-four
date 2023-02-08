// Linked to search page
// Creates an article of each plant

const SearchPlant = ({ handleClick, plant }) => {
  console.log(plant);
  return (
    <>
      <article>
        <h2 className="search-plant-result" onClick={() => handleClick(plant)}>
          {plant.names
            .replace("{", "")
            .replace("}", "")
            .replace(/"/g, "")
            .replace(",", ", ")}
        </h2>
        {/* <h2>{plant.latin_name}</h2>
                <h2>{plant.ideal_light}</h2>
                <h2>{plant.watering}</h2>
                <h2>{plant.watering}</h2>
                <h2>{plant.origin}</h2>
                <h2>{plant.climate}</h2>
                <h2>{plant.soil}</h2> */}
        {/* We can add other details here to display */}
      </article>
    </>
  );
};

export default SearchPlant;
