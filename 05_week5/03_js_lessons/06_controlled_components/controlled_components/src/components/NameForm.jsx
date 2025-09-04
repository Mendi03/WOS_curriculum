import React, { useState } from 'react';

function NameForm() {
  // 1. State Variable: Initialize state to hold the input's value.
  const [name, setName] = useState(''); // Start with an empty string

  // 3. onChange Handler: This function updates the state.
  const handleNameChange = (event) => {
    // event.target.value holds the current value of the input field
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    alert(`A name was submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          // 2. value Prop: Connect the input's value to our state.
          value={name}
          // 3. onChange Handler: Call our function when the input changes.
          onChange={handleNameChange}
        />
      </label>
      <button type="submit">Submit</button>
      <p>Current name in state: {name}</p> {/* See it update live! */}
    </form>
  );
}

export default NameForm;