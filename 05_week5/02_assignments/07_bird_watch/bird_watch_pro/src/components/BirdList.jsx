import { useState } from "react";
import { birdData } from "../data/birdData";
import BirdCard from "./birdCard";
import styles from "./BirdList.module.css";

function BirdList() {
// usestate for filter button
  const [watchedFilter, setWatchedFilter] = useState(false);
//   usestate for birdData array of bird objects
  const [birds, setBirds] = useState(birdData);

//   Logic for hiding the watched birds
  const birdList = watchedFilter ? birds.filter((bird) => !bird.watched) : birds;

  const handleWatchedFilter = () => {
    setWatchedFilter(!watchedFilter);
  }

//   marks birds as watched
  const handleMarkedAsWatched = (idtoMark) => {
    setBirds((prevList) => {
        return prevList.map(
            (bird) =>
                bird.id === idtoMark ? {...bird, watched: !bird.watched} : bird
        );
    })
  }
// permanently deletes a bird from the birdList
  const handleDelete = (idToDelete) => {
    setBirds((prevList) => prevList.filter((bird) => bird.id !== idToDelete));
  };

  return (
    <main>
        <header>
            <div>
                <h1>BirdWatch Pro</h1>
                <button className={styles.filterBtn} onClick={handleWatchedFilter}>
                    {!watchedFilter ? "Hide watched": "Show All"}
                </button>
            </div>
        </header>

        <div className={styles.cards}>
            {birdList.map((bird) =>
                <BirdCard
                key={bird.id} 
                bird={bird}
                handleMarks ={handleMarkedAsWatched}
                handleDel = {handleDelete}/>
            )}
        </div>
    </main>
  )
}

export default BirdList