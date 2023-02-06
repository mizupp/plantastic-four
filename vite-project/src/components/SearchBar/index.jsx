import React from 'react'
import './styles.css'

const SearchBar = ({plants, setSearchResults }) => {
const handleSubmit = (e) => e.preventDefault()

const handleSearchChange = (e) => {
    
    const inputValue = e.target.value;
    console.log(filterWord(inputValue));

    if (!inputValue) {
      return setSearchResults(plants) // If input is empty, display all plants
    }
    else {
      const resultsArray = plants.filter(plant => plant.name.includes(filterWord(inputValue)))
      setSearchResults(resultsArray)
    }
}

const filterWord = (word) => {
  let string = word;
  let newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}


  return (
    <div className='search-bar-comp'>
        <form className='search' onSubmit={handleSubmit}>
        <input className='search-input'
        type="text"
        name='searchValue'
        id="search"
        onChange={handleSearchChange} />
        <button className='search-btn' />
        </form>
    </div>
  )
}

export default SearchBar;
