

function CountryEntry({ code, country }) {
  return (
    <tbody>
        <tr>
            <td>{code}</td>
            <td>{country}</td>
        </tr>
    </tbody>
  )
}

export default CountryEntry