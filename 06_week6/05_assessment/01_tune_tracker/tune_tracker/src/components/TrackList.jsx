import { useState } from "react";
import SongForm from "./SongForm";
import Song from "./Song";

import styles from "../styles/TrackList.module.css";

function TrackList() {
  const [songs, setSongs] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);

  let displayedSongs = songs;

  const addTune = (titleInput, artistInput) =>{
    const newSong = {
        id: crypto.randomUUID(),
        title: titleInput,
        artist: artistInput,
        favorite: false
    }
    setSongs((prev) => [...prev, newSong])
  }

  const handleFavorite = (songId) => {
    const updateFavorites = songs.map((song) => 
      song.id === songId ? {...song, favorite: !song.favorite} : song) 
    
    setSongs(updateFavorites);
  }

  const handleDelete = (idToDelete) =>{
    const updatedSongs = songs.filter((song) => song.id !== idToDelete)
    setSongs(updatedSongs)
  }

  const handleToggleFavs = () =>{
    setToggleFilter(!toggleFilter);
  }

  if(toggleFilter){
    const favoriteSongs = songs.filter((song) => song.favorite);
    displayedSongs = favoriteSongs;
  }
  
  if(displayedSongs.length !== 0){
    return(
      <main>
        <div className={styles["main-content"]}>
          <SongForm
          addSong={addTune} />
          <div className={styles.tracks}>
              <div>
                <h2>Your Tracks</h2>
                <button 
                onClick={handleToggleFavs}>
                  {toggleFilter ? "View All": "Show Favorites"}
                </button>
              </div>
              <ul>
                  {displayedSongs.map((track) =>
                    <Song
                    key={track.id}
                    song={track}
                    onFavorite={handleFavorite}
                    onDelete={handleDelete} />
                  )}
              </ul>
          </div>
        </div>
      </main>
    )
  }

  else if(displayedSongs.length === 0 && toggleFilter){
    return(
      <main>
        <div className={styles["main-content"]}>
          <SongForm
          addSong={addTune} />
          <div className={styles.tracks}>
              <div>
                <h2>Your Tracks</h2>
                <button 
                onClick={handleToggleFavs}>
                  {toggleFilter ? "View All": "Show Favorites"}
                </button>
              </div>
              <ul>
                  {displayedSongs.map((track) =>
                    <Song
                    key={track.id}
                    song={track}
                    onFavorite={handleFavorite}
                    onDelete={handleDelete} />
                  )}
              </ul>
          </div>
        </div>
      </main>
    )
  }
  
  else return( 
  <main>
    <div className={styles["main-content"]}>
      <SongForm
      addSong={addTune} />
      <p style={{color: "#08CB00"}}>Your TuneTracker is empty. Add a track above.</p>
    </div>
  </main> )
  
}

export default TrackList;
