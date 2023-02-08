import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { storePlant } from "../../actions";
import { useNavigate } from "react-router-dom";

const PlantInfo = ({ results }) => {
  console.log("RESULTS", results);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const names = results.names
    .replace("{", "")
    .replace("}", "")
    .replace(/"/g, "")
    .replace(",", ", ");

  const handleAdd = () => {
    const plant = {
      name: names,
      id: results.id,
    };
    dispatch(storePlant(plant));
    navigate("/create");
  };

  return (
    <div className="plant-info">
      {results && (
        <div>
          <h2 className="result-name">{names}</h2>
          <ul className="search-result">
            <li>
              <h3>Plant type:</h3>
              <p>{results.category}</p>
            </li>
            <li>
              <h3>Climate:</h3>
              <p>{results.climate}</p>
            </li>
            <li>
              <h3>Origin</h3>
              <p>{results.origin}</p>
            </li>
            <li>
              <h3>Scientific name:</h3> <p>{results.latin_name}</p>
            </li>
            <li>
              <h3>Tolerated light:</h3>{" "}
              <p>{results.tolerated_light.replace(".", "")}</p>
            </li>
            <li>
              <h3>Ideal light:</h3>{" "}
              <p>{results.ideal_light.replace(".", "")}</p>
            </li>
            <li>
              <h3>Temperature:</h3>{" "}
              <p>
                {results.min_temp}-{results.max_temp}&#8451;
              </p>
            </li>
            <li>
              <h3>Watering:</h3>
              <p>{results.watering}</p>
            </li>
          </ul>

          <button className="add-to-shelf-btn" onClick={handleAdd}>
            Add to shelf
          </button>
        </div>
      )}
    </div>
  );
};

export default PlantInfo;
