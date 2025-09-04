import { useState, useEffect } from "react";
import axios from 'axios';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // Flag for cleanup

    async function fetchPokemon() {
      setIsLoading(true);
      setError(null);
      try {
        // NEW: Use axios.get()
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');

        // Axios automatically parses JSON and rejects for 4xx/5xx status codes
        // So, no need for response.ok check or response.json() call
        if (!ignore) {
          setPokemon(response.data.results); // Data is directly in response.data
        }
      } catch (err) {
        if (!ignore) {
          // Axios error objects often have a 'response' property for server errors
          setError(err.message || 'An unknown error occurred');
          // You could check err.response.status here for specific HTTP errors
          console.error("Error fetching Pokémon with Axios:", err);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    fetchPokemon();

    return () => {
      ignore = true; // Cleanup
    };  
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Pokédex</h1>
      <h2>First 20 Pokémon:</h2>
      {isLoading ? (
        <p>Loading Pokémon data...</p>
      ) : error ? ( // NEW: Conditional rendering for error state
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : pokemon.length === 0 ? (
        <p>
          No Pokémon loaded yet. Check your console for errors or network
          activity.
        </p>
      ) : (
        <ul>
          {pokemon.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonList;
