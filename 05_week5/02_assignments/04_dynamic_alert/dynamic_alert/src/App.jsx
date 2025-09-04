import Alert from "./components/Alert";

function App() {
  
  return (
    <>
      <Alert type="success" message="File uploaded successfully!" />
      <Alert type="warning" message="Your subscription is about to expire." />
      <Alert type="error" message="Something went wrong. Try again." />
    </>
  )
}

export default App
