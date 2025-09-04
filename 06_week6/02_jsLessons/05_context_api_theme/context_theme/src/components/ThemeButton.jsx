// src/components/ThemeButton.jsx

import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext'; // Adjust path as needed

function ThemeButton() {
  const theme = useContext(ThemeContext); // Read the current theme from context

  return (
    <button
      style={{
        background: theme === 'dark' ? '#555' : '#eee',
        color: theme === 'dark' ? '#eee' : '#333',
        padding: '10px',
        borderRadius: '5px',
      }}>
      Current Theme: {theme.toUpperCase()}
    </button>
  );
}
export default ThemeButton;