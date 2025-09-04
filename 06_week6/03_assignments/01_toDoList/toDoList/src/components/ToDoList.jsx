import { useState } from "react";
import ToDoEntry from "./ToDoEntry";
import ToDoForm from "./ToDoForm";
import styles from "../styles/ToDoList.module.css"

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [filterComplete, setFilterComplete] = useState(false);

  let toDoList = toDos;

  const handleAddTodo = (newTodo) => {

    const newEntry = {
        id: crypto.randomUUID(),
        description: newTodo,
        done: false
    }
    setToDos((prevList) => 
    [...prevList, newEntry])
  }

  const handleMarkAsDone = (idToMark) => {
    setToDos((prevList) => prevList.map(
        (todo) => todo.id === idToMark ? {...todo, done: !todo.done} : todo
    ))
  }

  const handleDelete = (idToDelete) =>{
    setToDos((prevList) => 
        prevList.filter((entry) => entry.id !== idToDelete))
  }

  const handleCompleteFilter = () => {
    setFilterComplete(!filterComplete)
  }

  if(filterComplete) {
    const unfinishedToDos = toDos.filter((toDoEntry) => toDoEntry.done === false);
    toDoList = unfinishedToDos;
  }
  
  return (
    <div>
        <ToDoForm 
        onAddTodo = {handleAddTodo} />
      <main>
        <div className={styles.top}>
          <h2>Your Todos</h2>
          <button 
          onClick={handleCompleteFilter}>
            {filterComplete ? "Show All": "Hide Complete"}
          </button>
        </div>
        <div className={styles.bottom}>
            {toDoList.length === 0 ? <p>Nothing to do. Good Job!</p> : toDoList.map((todoItem) =>
            <ToDoEntry 
            key={todoItem.id} 
            entry={todoItem} 
            onDone={handleMarkAsDone}
            onDelete={handleDelete} />)}
        </div>
      </main>
    </div>
  )
}

export default ToDoList