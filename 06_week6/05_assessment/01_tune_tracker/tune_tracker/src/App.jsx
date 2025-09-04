import TrackList from "./components/TrackList"
import "./App.module.css"
import logo from "./assets/boombox.svg"

function App() {
  

  return (
    <>
      <header>
        <h1><img src={logo} alt="logo" /> TuneTracker</h1>
      </header>
      <TrackList />
    </>
  )
}

export default App
