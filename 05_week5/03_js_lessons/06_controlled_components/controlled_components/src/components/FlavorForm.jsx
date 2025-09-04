import { useState } from "react";

function FlavorForm() {
  const [selectedFlavor, setSelectedFlavor] = useState('grapefruit'); // Default value

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  return (
    <form>
      <label>
        Pick your favorite flavor:
        <select value={selectedFlavor} onChange={handleFlavorChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <p>Your favorite flavor is: {selectedFlavor}</p>
    </form>
  );
}

export default FlavorForm