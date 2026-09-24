import AiDayPlanning from "../../components/AiDayPlanning";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import Features from "../../components/Features";
import Goals from "../../components/Goals";
import HowitWorks from "../../components/HowitWorks";
import Marketting from "../../components/Marketting";
import PlanPricing from "../../components/PlanPricing";
import Rating from "../../components/Rating";
import Stats from "../../components/Stats";

function HomePage() {

    return (
        <>
            <div>
                <Banner></Banner>
                <Stats></Stats>
                <Goals></Goals>
                <Features></Features>
                <HowitWorks></HowitWorks>
                <AiDayPlanning></AiDayPlanning>
                <Rating></Rating>
                <PlanPricing></PlanPricing>
                <Faq></Faq>
                <Marketting></Marketting>
            </div>
        </>
    )
}

export default HomePage
