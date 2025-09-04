import HeaderTop from "./components/Header.jsx";
import Profile from "./components/ProfileCard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.module.css"

function App() {
  return (
  <>
    <HeaderTop />
    <main>
      <div>
        <Profile />
        <Sidebar />
      </div>
    </main>
    <Footer />
  </>
);
}

export default App;