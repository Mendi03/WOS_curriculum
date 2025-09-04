// src/App.jsx

import HighlightBox from './components/HighlightBox';
import './index.css';

function App() {
  return (
    <div className="container"> {/* Use the container class from index.css */}
      <h1>My `HighlightBox` Practice</h1>

      <HighlightBox variant="warning" title="Confirm Deletion">
        <p>Are you sure you want to delete that?</p>
        <button style={{ marginTop: '10px' }}>Yes, Delete</button>
      </HighlightBox>

      <HighlightBox variant="success">
        <p>Thank you for logging in. Your session is now active!</p>
      </HighlightBox>

      <HighlightBox variant="info" title="Information Update">
        <ul>
          <li>New feature launched.</li>
          <li>Check out the new dashboard.</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="danger" title="Error!">
        <p>An unexpected error occurred. Please try again later.</p>
      </HighlightBox>
    </div>
  );
}

export default App;