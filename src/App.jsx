import Banner from "./components/Banner";
import Features from "./components/Features";
import Goals from "./components/Goals";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Banner></Banner>
        <Stats></Stats>
        <Goals></Goals>
        <Features></Features>
      </div>
    </>
  )
}

export default App
