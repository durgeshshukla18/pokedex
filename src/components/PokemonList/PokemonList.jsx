import { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon.jsx';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pokedexUrl, setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    // const [pokemonListState, setPokemonListState] = useState({
    //     pokemonList: [],
    //     loading: true,
    //     pokedexUrl: 'https://pokeapi.co/api/v2/pokemon?limit=10',
    //     nextUrl: '',
    //     prevUrl: ''
    // });

    async function downloadPokemons(){
        setLoading(true);
        const response = await axios.get(pokedexUrl); // Fetching the list of Pokemons
        const pokemonResults = response.data.results; // Extracting the results array from the response
        console.log(pokemonResults);
        setNextUrl(response.data.next); // Setting the next URL for pagination
        setPrevUrl(response.data.previous); // Setting the previous URL for pagination


        // itreating over the results to get details of each Pokemon, to create an array of promises
        // that will be resolved concurrently using axios.all
        // Using axios.all to fetch details of all Pokemons concurrently
        const pokemonResultsPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        // passing the array of promises to axios.all
        const pokemonDetails = await axios.all(pokemonResultsPromise);  
        console.log(pokemonDetails);
        // Mapping over the resolved promises to extract the required data
        const pokeListRes = pokemonDetails.map((pokeData) => {
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other?.dream_world?.front_default || pokemon.sprites.front_default,
                types: pokemon.types
        }});
        console.log(pokeListRes);
        setPokemonList(pokeListRes); // Setting the state with the list of Pokemons
        setLoading(false);

        // console.log(response.data);
        setLoading(false);
    }

    useEffect(() => {
        console.log("useEffect called");
        downloadPokemons();
    }, [pokedexUrl]);

    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);


    return (
        <>
        <div className="pokemon-list-wrapper">
            <span>List of Pokemons</span>
            <div className="pokemon-wrapper">
                
            {(loading) ? 'Loading...' : 
            pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
        )}       
        </div>
        {/* Pokemon list will be rendered here */}

        </div>

        <div className="button-wrapper">
            <button disabled={prevUrl === null} onClick={() => setpokedexUrl(prevUrl)} >Prev</button>
            <button disabled={nextUrl === null} onClick={() => setpokedexUrl(nextUrl)}>Next</button>
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