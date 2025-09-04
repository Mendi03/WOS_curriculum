import { useState } from "react";
import "../styles/ToDoForm.module.css";

function ToDoForm({ onAddTodo}) {
  const [newTodo, setNewTodo] = useState("");
  const [taskError, setTaskError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let validTask = true;
    setTaskError("");

    if(newTodo.length === 0){
        setTaskError("Cannot add empty task");
        validTask = false;
    } 
    else if(newTodo.length < 2){
        setTaskError("Task needs a minimum of 2 characters")
        validTask = false;
    }

    if(validTask){
        onAddTodo(newTodo);
        setNewTodo("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input
            type="text"
            placeholder="Todo task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}/>
            {taskError && <p style={{color: "red"}}>{taskError}</p>}
        </div>
        <button>Add Todo</button>
    </form>
  )
}

export default ToDoForm