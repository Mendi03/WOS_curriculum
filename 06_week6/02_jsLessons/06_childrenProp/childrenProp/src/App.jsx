// src/App.jsx
import Card from './components/Card'; // Import your new Card component

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Understanding `children` Prop</h1>

      {/* Card with a simple paragraph */}
      <Card title="My First Card">
        <p>This paragraph is passed as a child to the Card component!</p>
      </Card>

      {/* Card with a list */}
      <Card title="Features">
        <ul>
          <li>Flexibility</li>
          <li>Reusability</li>
          <li>Composability</li>
        </ul>
      </Card>

      {/* Card with just text and no title */}
      <Card>
        Just some plain text content here, also passed as children.
        <button style={{ display: 'block', marginTop: '10px' }}>
          Click Me
        </button>
      </Card>
    </div>
  );
}

export default App;