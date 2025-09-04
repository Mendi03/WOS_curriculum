import { useState, useEffect } from "react";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // Flag to track if we should ignore the fetch result

    async function fetchPokemon() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch Pokémon data: HTTP status ${response.status}`
          );
        }
        const data = await response.json();

        if (!ignore) {
          // Only update state if we should NOT ignore the result
        //   setTimeout(() => setPokemon(data.results), 2000);

          setPokemon(data.results);
        }
      } catch (err) {
        if (!ignore) {
          // Only update state if we should NOT ignore the result
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          // Only update state if we should NOT ignore the result
          setIsLoading(false);
        }
      }
    }

    fetchPokemon();

    return () => {
      ignore = true; // Set flag to true, indicating subsequent fetch results should be ignored
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
