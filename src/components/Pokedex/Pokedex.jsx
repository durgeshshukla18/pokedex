import Search from '../Search/Search.jsx';
import './Pokedex.css';

function Pokedex(){

    return (
        <div className="pokedex-wrapper">
        <h1 id="pokedex-title">Pokedex</h1>
        <Search />
        </div>
    );
}

export default Pokedex;