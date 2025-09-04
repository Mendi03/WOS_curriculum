import { useState } from 'react';

function App() {
  const [count, setCount] = useState(5);

  // Create three state variables using useState:

  const [username, setUsername] = useState("Ellie");
  const [isModalOpen, setisModalOpen] = useState(false);
  const [toDoItems, setToDoItems] = useState(["mow lawn", "Do hw", "Pay rent"]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };
  const handleOtherClick = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me to increase</button>
      <button onClick={handleOtherClick}>Click me to decrease</button>
    </div>
  );
}

export default App
