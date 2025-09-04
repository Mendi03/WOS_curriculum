function AnimalCard({ name, species, fact }) {
  return (
    <div>
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{fact}</p>
    </div>
  )
}

export default AnimalCard