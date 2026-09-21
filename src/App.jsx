import Banner from "./components/Banner";
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
      </div>
    </>
  )
}

export default App
