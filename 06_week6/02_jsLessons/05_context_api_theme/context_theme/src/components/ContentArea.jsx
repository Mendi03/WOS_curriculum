// src/components/ContentArea.jsx

import ThemeButton from './ThemeButton'; // Import the consumer component

function ContentArea() {
  // No 'theme' prop needed here!
  return (
    <div
      style={{ border: '1px dashed gray', padding: '20px', marginTop: '20px' }}>
      <h3>This is a Content Area</h3>
      <p>It doesn't care about the theme, but its child does!</p>
      <ThemeButton /> {/* Render ThemeButton, no 'theme' prop passed */}
    </div>
  );
}
export default ContentArea;