import { GoArrowUpLeft } from "react-icons/go";
import SectionCards from "./Shared/SectionCards";
import SectionHeader from "./Shared/SectionHeader";
import { BiDownArrowCircle } from "react-icons/bi";
import { SiStackedit } from "react-icons/si";

const Goals = () => {
    const title = "Studying without a system is exhausting"
    const description = "You're not lacking discipline. You're lacking a place where your goals turn into today's tasks."

    const card_01 = {
        title: "Goals stay vague",
        description: `"Get better at math" doesn't tell you what to open your laptop and do this afternoon.`,
        icon: <GoArrowUpLeft></GoArrowUpLeft>
    }
    const card_02 = {
        title: "Motivation fades fast",
        description: `Without something to point at, it's hard to tell if this week actually went anywhere.`,
        icon: <BiDownArrowCircle />
    }
    const card_03 = {
        title: "Plans live everywhere",
        description: `A to-do app, a notes app, a calendar - and none of them talk to each other.`,
        icon: <SiStackedit />
    }
    return (
        <section className="mb-10 container mx-auto">
            <SectionHeader title={title} description={description}></SectionHeader>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-5 lg:p-0">
                <SectionCards icon={card_01.icon} title={card_01.title} description={card_01.description}></SectionCards>
                <SectionCards icon={card_02.icon} title={card_02.title} description={card_02.description}></SectionCards>
                <SectionCards icon={card_03.icon} title={card_03.title} description={card_03.description}></SectionCards>
            </div>
        </section>
    );
};

export default Goals;