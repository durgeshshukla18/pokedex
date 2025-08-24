import { useState } from 'react';
import './Search.css';
import useDebounce from '../../hooks/useDebounce';

function Search({updateSearchTerm}){

    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearchChange = (e) => {
    //     setSearchTerm(e.target.value);
    //     updateSearchTerm(e.target.value);
    // };

    const debouncedSearch = useDebounce((value) => {
        updateSearchTerm(value)}, 2000);
    

    return (
        <div className="search-wrapper">
        <input 
        id="pokemon-name-search"
        type="text"
        placeholder="Search for a Pokémon"
        onChange={(e) => debouncedSearch(e.target.value)}
        />
        {/* {searchTerm} */}
        </div>
    )
}


export default Search;