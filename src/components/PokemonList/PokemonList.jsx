import { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon.jsx';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function downloadPokemons(){
         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const pokemonResults = response.data.results;
        const pokemonResultsPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonDetails = await axios.all(pokemonResultsPromise); 
        console.log(pokemonDetails);
        const res = pokemonDetails.map((pokeData) => {
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other?.dream_world?.front_default || pokemon.sprites.front_default,
                types: pokemon.types
        }});
        console.log(res);
        setPokemonList(res);
        setLoading(false);

        // console.log(response.data);
        setLoading(false);
    }

    useEffect(async() => {
        console.log("useEffect called");
        downloadPokemons();
    }, []);

    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);


    return (
        <>
        <div className="pokemon-list-wrapper">
            <span>List of Pokemons</span>
            {(loading) ? 'Loading...' : 
            pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />
    )}       
        {/* Pokemon list will be rendered here */}

        </div>


        {/* Uncomment below to test state updates */}
        {/* <div>
            x:{x} <button onClick={() => setX(x + 1)}>Inc</button>
        </div>
        <div>
            y:{y} <button onClick={() => setY(y + 1)}>Inc</button>
        </div> */}
        </>
    )
}

export default PokemonList;