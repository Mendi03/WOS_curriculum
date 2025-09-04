import { useState } from "react";
import heartPlus from "../assets/heart-plus.svg";
import heartMinus from "../assets/heart-minus.svg";
import Delete from "../assets/x-mark.svg";
import "../styles/Song.module.css";

function Song({ song, onFavorite, onDelete }) {
  const [favorite, setFavorite] = useState(song.favorite);

  const changeFavorite = () => {
    setFavorite(!favorite)
    onFavorite(song.id)
  }

  return (
    <li>
        {favorite ? 
        <div style={{backgroundColor: "#08CB00"}}>
            <p>{song.title} - {song.artist}</p>
            <button 
            onClick={changeFavorite}>
              <img src={heartMinus} alt="favorite" />
            </button>
            <button
            onClick={() => onDelete(song.id)}>
              <img src={Delete} alt="delete" />
            </button>
        </div> :
        <div style={{backgroundColor: "black"}}>
            <p style={{color: "#EEEEEE"}}>{song.title} - {song.artist}</p>
            <button onClick={changeFavorite}><img src={heartPlus} alt="favorite" /></button>
            <button
            onClick={() => onDelete(song.id)}>
              <img src={Delete} alt="delete" />
            </button>
        </div>}
    </li>
  )
}

export default Song