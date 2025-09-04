import React, { useState } from 'react';
import trash from '../assets/trash.svg';
import styles from '../styles/ToDoEntry.module.css';

function ToDoEntry({ entry, onDone, onDelete }) {
  const [done, setDone] = useState(false);

  const handleChecked = () => {
    setDone(!done);
    onDone(entry.id);
  }

  return (
    <div className={styles.entry}>
        <div>
            <input 
            type="checkBox"
            checked={entry.done}
            onChange={handleChecked} />
        
            {entry.done? <p style={{textDecoration: "line-through"}}>{entry.description}</p>: <p>{entry.description}</p>}
        </div>
        <button
        onClick={() => onDelete(entry.id)}><img src={trash} alt="delete button" />
        </button>
    </div>
  )
}

export default ToDoEntry