import { useState, useEffect } from 'react';
import Search from '../Search/Search.jsx';
import PokemonList from '../PokemonList/PokemonList.jsx';
import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails.jsx';

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     console.log("Search Term Updated:", searchTerm);
    // }, [searchTerm]);

    return (
        <div className="pokedex-wrapper">
        {/* <h1 id="pokedex-title">Pokedex</h1> */}
        <Search updateSearchTerm={setSearchTerm} />
        {(searchTerm.length == 0) ? <PokemonList /> : < PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        {/* <PokemonList /> */}
        </div>
    );
}

export default Pokedex;