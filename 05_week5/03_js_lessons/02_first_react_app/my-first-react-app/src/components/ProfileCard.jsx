import elster from '../assets/LSTR_512.jpg';
import styles from './ProfileCard.module.css'

function ProfileCard(){
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={elster} alt="pic of elster" />
      {/* <img src="https://hhsjournalism.com/wp-content/uploads/2024/10/Screenshot-2024-10-01-at-1.24.32%E2%80%AFPM-1200x618.png" alt="pic of elster" /> */}
      <h2 className={styles.title}>Elster</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente quae, perspiciatis officiis odio omnis nesciunt eligendi alias reiciendis sint, quasi rerum atque, quos vel. Cum neque tempore fugiat eligendi!</p>
    </div>
  )
}

export default ProfileCard;