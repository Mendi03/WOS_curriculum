import { useState } from "react";

function BioForm() {
  const [bio, setBio] = useState('');

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <form>
      <label>
        Bio:
        <textarea value={bio} onChange={handleBioChange} />
      </label>
      <p>Your bio: {bio.substring(0, 50)}...</p>
    </form>
  );
}

export default BioForm