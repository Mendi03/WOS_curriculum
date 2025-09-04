import styles from "./BirdCard.module.css";

function BirdCard({ bird, handleMarks, handleDel }) {
  return (
    <div className={styles.card}>
      <img src={bird.image} alt={bird.type} />
      <div>
        <h2>{bird.type} {bird.watched ? "(Watched)": "(Not watched)"}</h2>
        <p>{bird.description}</p>
      </div>
      <div className={styles.cardBottom}>
        <button
        onClick={() => handleMarks(bird.id)}>
          {bird.watched ? "Mark as not watched": "Mark as watched"}
        </button>
        <button 
          onClick={() => handleDel(bird.id)}>
          Delete Bird
        </button>
      </div>

    </div>
  )
}

export default BirdCard