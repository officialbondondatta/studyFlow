import AiDayPlanning from "./components/AiDayPlanning";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Goals from "./components/Goals";
import HowitWorks from "./components/HowitWorks";
import Navbar from "./components/Navbar";
import PlanPricing from "./components/PlanPricing";
import Rating from "./components/Rating";
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
        <HowitWorks></HowitWorks>
        <AiDayPlanning></AiDayPlanning>
        <Rating></Rating>
        <PlanPricing></PlanPricing>
      </div>
    </>
  )
}

export default App
