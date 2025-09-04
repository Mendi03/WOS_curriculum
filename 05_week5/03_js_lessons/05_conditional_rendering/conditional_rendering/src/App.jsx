import Welcome from "./components/WelcomeBanner"
function App() {
  
  return (
    <>
      <div>
        <Welcome 
        isBirthday={true}/>
        <Welcome 
        isBirthday={false}/>
      </div>
    </>
  )
}

export default App
