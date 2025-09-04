import { useState } from "react";
import { pokemonData } from "../data/pokemonData"; // Adjust path if you put it in a 'data' folder
import PokemonCard from "./PokemonCard";

function PokemonList() {
    
    const [showOnlyCaught, setShowOnlyCaught] = useState(false);

  // Determine which list of Pokemon to display based on the state
  const displayedPokemon = showOnlyCaught
    ? pokemonData.filter((pokemon) => pokemon.caught === true) // Filter if showOnlyCaught is true
    : pokemonData; // Otherwise, show all Pokemon

    return (
        <div>
      <h1>My Pokedex</h1>
      {/* Button to toggle the filter state */}
      <button
        onClick={() => setShowOnlyCaught(!showOnlyCaught)}
        style={{ marginBottom: "20px", padding: "10px" }}>
        {showOnlyCaught ? "Show All Pokemon" : "Show Only Caught"}
      </button>

      <div
        className="pokemon-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}>
        {/* Map over the conditionally filtered array */}
        {displayedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
    );
}

export default PokemonList;