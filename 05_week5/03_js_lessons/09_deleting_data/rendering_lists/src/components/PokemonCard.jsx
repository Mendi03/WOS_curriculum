function PokemonCard({ pokemon, onMarkAsCaught, onDeletePokemon }) { // Accepts 'pokemon' as a prop
  return (
    <div
      className="pokemon-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}>
      <h3>
        {pokemon.name} - #{pokemon.id}
      </h3>
      <p>Type(s): {pokemon.types.join(", ")}</p>
      <p>Status: {pokemon.caught ? "Caught!" : "Not Caught"}</p>
      {!pokemon.caught && ( // Conditionally show button if not caught
        <button
          onClick={() => onMarkAsCaught(pokemon.id)} // Call the parent's function
          style={{ padding: "8px", cursor: "pointer" }}>
          Mark as Caught
        </button>
      )}
      <button
        onClick={() => onDeletePokemon(pokemon.id)} // Call the parent's delete function
        style={{
          padding: "8px",
          cursor: "pointer",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}>
        Delete Pokemon
      </button>
    </div>
  );
}

export default PokemonCard;