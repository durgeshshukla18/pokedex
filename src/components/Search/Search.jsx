import { useState } from 'react';
import './Search.css';

function Search({updateSearchTerm}){

    // const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className="search-wrapper">
        <input 
        id="pokemon-name-search"
        type="text"
        placeholder="Search for a Pokémon"
        onChange={(e) => updateSearchTerm(e.target.value)}
        />
        {/* {searchTerm} */}
        </div>
    )
}


export default Search;