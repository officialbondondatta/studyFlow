import { GoArrowUpLeft } from "react-icons/go";
import SectionHeader from "./Shared/SectionHeader";
import { BiDownArrowCircle } from "react-icons/bi";
import { SiStackedit } from "react-icons/si";
import SectionCards from "./Shared/SectionCards";

const Features = () => {
    const title = "Everything a study session needs"
    const description = "Nothing you don't need, nothing you have to configure for an hour first."

    const card_01 = {
        title: "Daily task breakdown",
        description: `Every goal splits into small tasks you can finish in one sitting.`,
        icon: <GoArrowUpLeft className="text-[#0e7c66]" />
    }
    const card_02 = {
        title: "Goal tracking",
        description: `See exactly how many tasks stand between you and each goal.`,
        icon: <BiDownArrowCircle className="text-[#0e7c66]" />
    }
    const card_03 = {
        title: "Subject insights",
        description: `Color-coded subjects show where your time is actually going.`,
        icon: <SiStackedit className="text-[#0e7c66]" />
    }
    const card_04 = {
        title: "Focus timer",
        description: `A built-in Pomodoro timer to protect a block of real study time.`,
        icon: <GoArrowUpLeft className="text-[#0e7c66]" />
    }
    const card_05 = {
        title: "Visual progress",
        description: `Streaks, charts and progress bars that move when you do the work.`,
        icon: <BiDownArrowCircle className="text-[#0e7c66]" />
    }
    const card_06 = {
        title: "AI day planning",
        description: `One click suggests a simple schedule for today's tasks.`,
        icon: <SiStackedit className="text-[#0e7c66]" />
    }
    return (
        <section className="container mx-auto lg:mt-30 md:mt-30 mt-10 mb-10">
            <SectionHeader title={title} description={description}></SectionHeader>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 lg:p-0">
                <SectionCards icon={card_01.icon} title={card_01.title} description={card_01.description}></SectionCards>
                <SectionCards icon={card_02.icon} title={card_02.title} description={card_02.description}></SectionCards>
                <SectionCards icon={card_03.icon} title={card_03.title} description={card_03.description}></SectionCards>
                <SectionCards icon={card_04.icon} title={card_04.title} description={card_04.description}></SectionCards>
                <SectionCards icon={card_05.icon} title={card_05.title} description={card_05.description}></SectionCards>
                <SectionCards icon={card_06.icon} title={card_06.title} description={card_06.description}></SectionCards>
            </div>
        </section>
    );
};

export default Features;