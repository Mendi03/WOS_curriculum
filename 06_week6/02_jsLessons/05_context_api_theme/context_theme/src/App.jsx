// src/App.jsx

import { useState } from 'react';
import ThemeContext from './contexts/ThemeContext'; // Import the Context object
import ContentArea from './components/ContentArea'; // Import the intermediate component

function App() {
  const [theme, setTheme] = useState('light'); // State to manage the theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provide the 'theme' state to the entire context tree
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          padding: '20px',
          background: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#333',
          minHeight: '100vh',
        }}>
        <h1>Context API Example: Theme Toggle</h1>
        <button
          onClick={toggleTheme}
          style={{ marginBottom: '20px', padding: '10px' }}>
          Toggle Theme
        </button>
        <ContentArea />
        {/* ContentArea (and its children) can now consume ThemeContext */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;