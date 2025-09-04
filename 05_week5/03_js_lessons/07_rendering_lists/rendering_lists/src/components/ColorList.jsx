
function ColorList() {
  const colors = [
    { id: 1, name: "Red" }, 
    { id: 2, name: "Green" }, 
    { id: 3, name: "Blue" }
    ];

    return (
    <div>
        <h2>My Colors</h2>
        <ul>
        {colors.map(color => (
            <li key={color.id}>{color.name}</li>
        ))}
        </ul>
    </div>
    );
}

export default ColorList