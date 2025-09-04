import { useState } from "react";
import styles from "../styles/SongForm.module.css"

function SongForm({ addSong }) {
  const [songInput, setSongInput] = useState({ title: "", artist: "" });
  const [errors, setErrors] = useState({ title: "", artist: "" });

  const handleInputChange = (e) => {
    setSongInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ title: "", artist: "" });

    let validSong = true;

    // title errors
    if (songInput.title.trim().length === 0) {
      setErrors((prev) => ({ ...prev, title: "Cannot add empty title" }));
      validSong = false;
    } else if (songInput.title.trim().length < 2) {
      setErrors((prev) => ({ ...prev, title: "Title must be at least 2 characters" }));
      validSong = false;
    }

    // artist errors
    if (songInput.artist.trim().length === 0) {
      setErrors((prev) => ({ ...prev, artist: "Cannot add empty artist" }));
      validSong = false;
    } else if (songInput.artist.trim().length < 2) {
      setErrors((prev) => ({ ...prev, artist: "Artist must be at least 2 characters" }));
      validSong = false;
    }

    if (validSong) {
      addSong(songInput.title, songInput.artist);
      setSongInput({ title: "", artist: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={songInput.title}
          onChange={handleInputChange}
        />
        {errors.title && <p>{errors.title}</p>}
      </div>
      <div>
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={songInput.artist}
          onChange={handleInputChange}
        />
        {errors.artist && <p>{errors.artist}</p>}
      </div>
      <div className={styles["submit-button"]}>
        <button>Add</button>
      </div>
    </form>
  );
}

export default SongForm;
