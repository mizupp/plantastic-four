import React from "react";
import './index.css';
import { useDispatch } from "react-redux";
import { storePlant } from "../../actions";
import { useNavigate } from "react-router-dom";

const PlantInfo = ({results}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const names = results.names
  .replace("{", "")
  .replace("}", "")
  .replace(/"/g, "")
  .replace(",", ", ")

  const handleAdd = () => {
    const plant = {
      name: names,
      id: results.id
    }
    dispatch(storePlant(plant))
    navigate('/create')
  }


  return (
    <div className="plant-info">
      {results &&
      
      <div>
        <h2>{names}</h2>
            <p>{results.latin_name}</p>
            <button onClick={handleAdd}>Add Plant</button>
      </div>
      
      }  
    </div>
  );
};

export default PlantInfo;
