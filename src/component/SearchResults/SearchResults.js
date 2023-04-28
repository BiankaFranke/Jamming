import React from 'react';
import './SearchResults.css';

// Import Components
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {
    return (
        <div className='results'>
            <h2>Results</h2>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    );
}
 
export default SearchResults;