import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css'; 


function PokemonDetails({pokemonName}){

    const { id } = useParams();
    console.log("Pokemon ID:", id);

    const [pokemonDetails, setPokemonDetails] = useState({});

    async function fetchPokemonDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log("Pokemon Details:", response.data);
        setPokemonDetails({
            id: response.data.id,
            name: response.data.name,
            image: response.data.sprites.other?.dream_world?.front_default || response.data.sprites.front_default,
            height: response.data.height,
            weight: response.data.weight,
            types: response.data.types.map(typeInfo => typeInfo.type.name)
        });
    }

    useEffect(() => {
        fetchPokemonDetails();
    }, [id]);

    return (
        <>
        <h1>Pokemon Details</h1>
        {/* Additional details will be added here */}
        <div className="pokemon-details-wrapper">
            <h2>{pokemonDetails.name}</h2>
            <img src={pokemonDetails.image} alt={pokemonDetails.name} />
            <p>ID: {pokemonDetails.id}</p>
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Types: {pokemonDetails.types?.join(', ')}</p>
        </div>
        </>
    );
}

export default PokemonDetails;