import React, { useState, useCallback } from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((e) => {
      setTerm(e.target.value);
    }, []);
  
    const search = useCallback(() => {
      props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className='search'>
            <input 
                className='searchBarInput' 
                type="search" 
                name="searchBar" 
                id="searchBar" 
                placeholder='Enter a song here' onChange={handleTermChange} 
                />
            <button className='searchBtn' onClick={search}>Search</button>
        </div>
    );
}
 
export default SearchBar;