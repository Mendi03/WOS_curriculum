import { useState } from "react";
import styles from "./PetCard.module.css";

function PetCard({ name, type, description, initialBoops, image}) {
    const [boops, setBoops] = useState(initialBoops);

    const incrementBoops = () =>{
        setBoops(prevBoops => prevBoops + 1);
    }


  return (
    <div className={styles.petCard}>
        <div>
            <img src={image} alt={name} />
        </div>
        <div>
            <h2>{name} the {type}</h2>
            <p>Description: {description}</p>
            <div className={styles.bottomCard}>
                <button onClick={incrementBoops}>Boop!</button>
                <p className={styles.counter}>Boop counter: {boops}</p>
            </div>
        </div>

    </div>
  )
}

export default PetCard