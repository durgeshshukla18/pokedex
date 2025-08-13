import Search from '../Search/Search.jsx';
import PokemonList from '../PokemonList/PokemonList.jsx';
import './Pokedex.css';

function Pokedex(){

    return (
        <div className="pokedex-wrapper">
        <h1 id="pokedex-title">Pokedex</h1>
        <Search />
        <PokemonList />
        </div>
    );
}

export default Pokedex;