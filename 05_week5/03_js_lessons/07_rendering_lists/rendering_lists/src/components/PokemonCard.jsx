function PokemonCard({ pokemon }) { // Accepts 'pokemon' as a prop
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
    </div>
  );
}

export default PokemonCard;