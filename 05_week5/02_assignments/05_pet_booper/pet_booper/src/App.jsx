import PetCard from "./components/PetCard";
import "./App.module.css";

function App() {
  
  return (
    <main>
      <PetCard
        name="Bubbles"
        type="dog"
        description="Loves long walks and peanut butter."
        initialBoops={3}
        image="/bubbles.jpg"
      />
      <PetCard
        name="Dapper"
        type="cat"
        description="Loves destroying furniture"
        initialBoops={10}
        image="/dapper.jpg"
      />
      <PetCard
        name="Peck"
        type="owl"
        description="Will scare you at night"
        initialBoops={5}
        image="/Peck.jpg"
      />
      <PetCard
        name="Peck"
        type="owl"
        description="Will scare you at night"
        initialBoops={5}
        image="/Peck.jpg"
      />
    </main>
  )
}

export default App
