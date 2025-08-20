import { useState } from 'react';
import './Search.css';

function Search({updateSearchTerm}){

    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearchChange = (e) => {
    //     setSearchTerm(e.target.value);
    //     updateSearchTerm(e.target.value);
    // };

    

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