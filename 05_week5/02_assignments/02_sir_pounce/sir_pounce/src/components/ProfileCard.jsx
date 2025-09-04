import cat from "../assets/pounce.jpeg";
import styles from "./ProfileCard.module.css"

function ProfileCard(){
    return(
        <div className={styles.card}>
            <img src={cat} alt="cat flashbang" />
            <p>
                Hi! I am a curious cat that has been caught doing nefarious activities. This is the last picture anyone will ever manage to take from me!!!
            </p>
        </div>
    )
}

export default ProfileCard;