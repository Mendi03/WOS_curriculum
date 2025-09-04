import React, { useState } from 'react'

function Searchbar({ onSearchSubmit }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(search);
  }

  return (
    <form onSubmit={handleClickSubmit}>
        <input 
        type="text" 
        value={search}
        onChange={handleSearch}/>
        <button>Search</button>
    </form>
  )
}

export default Searchbar