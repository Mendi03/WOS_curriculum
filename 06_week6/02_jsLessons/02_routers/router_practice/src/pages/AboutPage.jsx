// src/pages/AboutPage.jsx
import { Link } from 'react-router'; // NEW: Import Link

function AboutPage() {
  return (
    <section>
      <h1>About Us</h1>
      <p>Learn more about Gizmos, Inc.</p>
      <p>Go back to the <Link to="/">Home</Link> page.</p>
    </section>
  );
}

export default AboutPage;