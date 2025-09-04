// src/components/Card.jsx

function Card({ title, children }) {
  // Accepts 'title' explicitly, and 'children' implicitly
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '15px',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
      }}>
      {title && <h3>{title}</h3>} {/* Optionally display a title */}
      <div style={{ marginTop: title ? '10px' : '0' }}>
        {children} {/* This is where the magic happens! */}
      </div>
    </div>
  );
}

export default Card;