import { useState } from "react";

function ColorChoiceForm() {
  const [pickedColor, setPickedColor] = useState('blue'); // Default selection

  const handleColorChange = (event) => {
    setPickedColor(event.target.value);
  };

  return (
    <form>
      <p>Selected color: {pickedColor}</p>
      <label>
        <input
          type="radio"
          name="color"
          value="red"
          checked={pickedColor === 'red'}
          onChange={handleColorChange}
        /> Red
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="blue"
          checked={pickedColor === 'blue'}
          onChange={handleColorChange}
        /> Blue
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="green"
          checked={pickedColor === 'green'}
          onChange={handleColorChange}
        /> Green
      </label>
    </form>
  );
}

export default ColorChoiceForm;