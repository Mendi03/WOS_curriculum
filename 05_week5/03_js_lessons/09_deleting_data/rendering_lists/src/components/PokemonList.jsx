import { useState } from "react";
import { pokemonData as initialPokemonData} from "../data/pokemonData"; // Adjust path if you put it in a 'data' folder
import PokemonCard from "./PokemonCard";

function PokemonList() {
    
    const [showOnlyCaught, setShowOnlyCaught] = useState(false);
    const [pokemonList, setPokemonList] = useState(initialPokemonData);

  // Determine which list of Pokemon to display based on the state
    const displayedPokemon = showOnlyCaught
    ? pokemonList.filter((pokemon) => pokemon.caught === true) // Filter if showOnlyCaught is true
    : pokemonList; // Otherwise, show all Pokemon

    const handleMarkAsCaught = (idToMark) => {
      setPokemonList((prevList) => {
        // Create a new array where the matching Pokemon has its 'caught' status toggled
        return prevList.map(
          (pokemon) =>
            pokemon.id === idToMark
              ? { ...pokemon, caught: !pokemon.caught } // Create new object with toggled 'caught'
              : pokemon // Keep other pokemon as they are
        );
      });
    };

    const handleDeletePokemon = (idToDelete) =>{
      setPokemonList((prevList) => {
        return prevList.filter((pokemon) => !(pokemon.id === idToDelete));
      });
    };

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
          <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon} 
          onMarkAsCaught={handleMarkAsCaught}
          onDeletePokemon={handleDeletePokemon} />
        ))}
      </div>
    </div>
    );
}

export default PokemonList;