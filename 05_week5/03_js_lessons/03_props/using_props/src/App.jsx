import AnimalCard from "./components/AnimalCard";
import Moods from "./components/Mood";

function App() {

  return (
    <>
        <AnimalCard 
        name="Bubbles"
        species="Elephant"
        fact="Can paint with her trunk!"/>
        <AnimalCard 
        name="Phil"
        species="Cat"
        fact="Chonky cat!"/>
        <AnimalCard 
        name="Big Chungus"
        species="Bunny"
        fact="Totally not bugs Bunny!"/>

        <Moods emotion="angry" />
        <Moods emotion="happy" />
        <Moods emotion="sad" />

    </>
  )
}

export default App
