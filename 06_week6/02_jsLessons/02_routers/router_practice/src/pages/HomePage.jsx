// src/pages/HomePage.jsx
import { Link } from 'react-router'; // NEW: Import Link

function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to Gizmos, Inc.!</p>
      <p>Go to the <Link to="/about">About Us</Link> page.</p>
    </section>
  );
}

export default HomePage;