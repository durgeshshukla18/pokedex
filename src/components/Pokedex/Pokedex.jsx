import { useState } from 'react';
import Search from '../Search/Search.jsx';
import PokemonList from '../PokemonList/PokemonList.jsx';
import './Pokedex.css';

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="pokedex-wrapper">
        {/* <h1 id="pokedex-title">Pokedex</h1> */}
        <Search updateSearchTerm={setSearchTerm} />
        {(searchTerm.length == 0) ? <PokemonList /> : '<PokemonList search={searchTerm} />' }
        {/* <PokemonList /> */}
        </div>
    );
}

export default Pokedex;