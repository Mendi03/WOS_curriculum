import { useState } from 'react'; // Don't forget useState!

function AddMovieForm({ onAddMovie }) {
  // Will receive callback from parent
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newMovieYear, setNewMovieYear] = useState('');
  // NEW: State for validation errors
  const [titleError, setTitleError] = useState('');
  const [yearError, setYearError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop page reload!

    // NEW: Perform validations
    let isValid = true;
    // Reset errors before validating
    setTitleError('');
    setYearError('');

    if (newMovieTitle.trim().length < 2) {
      setTitleError('Title must be at least 2 characters.');
      isValid = false;
    }
    // Basic year validation: check if it's empty or not a valid number (simple)
    if (!newMovieYear.trim() || isNaN(parseInt(newMovieYear.trim(), 10))) {
      setYearError('Year is required and must be a number.');
      isValid = false;
    } else if (
      parseInt(newMovieYear.trim(), 10) < 1888 ||
      parseInt(newMovieYear.trim(), 10) > new Date().getFullYear() + 5
    ) {
      // Simple range check
      setYearError(
        `Year must be between 1888 and ${new Date().getFullYear() + 5}.`
      );
      isValid = false;
    }

    if (isValid) {
      // Call parent function, passing both title and year
      onAddMovie(newMovieTitle.trim(), parseInt(newMovieYear.trim(), 10)); // Convert year to number
      setNewMovieTitle(''); // Clear the input after submission
      setNewMovieYear(''); // Clear the year input
    }
    // If not isValid, error messages will be displayed by state updates
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #eee',
        borderRadius: '8px',
      }}>
      <div>
        {' '}
        {/* Wrap input and error in a div for better layout */}
        <input
          type="text"
          placeholder="Movie Title"
          value={newMovieTitle}
          onChange={(e) => setNewMovieTitle(e.target.value)}
          style={{
            padding: '8px',
            marginRight: '10px',
            width: '200px',
            borderColor: titleError ? 'red' : '',
          }}
        />
        {/* NEW: Conditionally render error message */}
        {titleError && (
          <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0' }}>
            {titleError}
          </p>
        )}
      </div>

      <div>
        {' '}
        {/* Wrap input and error in a div */}
        <input
          type="number" // Use type="number" for year
          placeholder="Year"
          value={newMovieYear}
          onChange={(e) => setNewMovieYear(e.target.value)}
          style={{
            padding: '8px',
            marginRight: '10px',
            width: '100px',
            borderColor: yearError ? 'red' : '',
          }}
        />
        {/* NEW: Conditionally render error message */}
        {yearError && (
          <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0' }}>
            {yearError}
          </p>
        )}
      </div>

      <button
        type="submit"
        style={{ padding: '8px 15px', cursor: 'pointer', marginTop: '10px' }}>
        Add Movie
      </button>
    </form>
  );
}

export default AddMovieForm;