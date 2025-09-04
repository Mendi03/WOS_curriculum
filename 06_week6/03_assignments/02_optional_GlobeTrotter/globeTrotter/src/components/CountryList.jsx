import { useState } from "react"
import { countries as countryData } from "../data/index"
import CountryEntry from "./CountryEntry"
import Searchbar from "./Searchbar";

function CountryList() {

  const [countries, setCountries] = useState(countryData);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearchSubmit = (search) => {
    const searchValue = search.trim().toLowerCase();

    if (searchValue.trim() === "") {
        setFilteredCountries(countries)
    }
    else{
        const filteredList = countries.filter((country) => 
            country.name.trim().toLowerCase().includes(searchValue) 
            || country.id.trim().toLowerCase().includes(searchValue)
            )

        setFilteredCountries(filteredList)
    }
  }

//   if(filterComplete) {
//     const unfinishedToDos = toDos.filter((toDoEntry) => toDoEntry.done === false);
//     toDoList = unfinishedToDos;
//   }


  return (
    <main>
        <Searchbar 
        onSearchSubmit = {handleSearchSubmit} />
        <table>
            <thead>
                <tr>
                    <th>CODE</th>
                    <th>COUNTRY</th>
                </tr>
            </thead>
            {filteredCountries.length === 0 
            ? <tr><td>No results</td></tr> 
            : filteredCountries.map((country) => 
            <CountryEntry 
            key={country.id}
            code={country.id}
            country={country.name} />)}
            
        </table>
    </main>
  )
}

export default CountryList