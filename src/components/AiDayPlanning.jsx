import { GiStarFormation } from "react-icons/gi";

const AiDayPlanning = () => {
    return (
        <section className="container mx-auto mt-30 p-5 lg:p-0">
            <div className="bg-[#142320] text-white px-8 py-6 rounded-2xl grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
                <div className="space-y-5">
                    <h2 className="flex items-center gap-2 text-yellow-600"><GiStarFormation />AI DAY PLANNING</h2>
                    <h1 className="max-w-90 text-2xl font-semibold">Not sure where to start? Let StudyFlow suggest a plan</h1>
                    <p className="text-slate-300">One click on "Plan my day" turns your open tasks into a simple, realistic schedule - so the hardest part, starting, is already done for you.</p>
                </div>
                <div className="bg-mist-700 px-5 py-3 rounded-xl">
                    <h2 className="text-yellow-600">Today's suggested plan</h2>
                    <div className="flex flex-col space-y-3 mt-5">
                        <span>
                            9:00 - 9:45 Deep work on your hardest task
                        </span>
                        <span>
                            10:00 - 10:45 Next task, same subject
                        </span>
                        <span>
                            11:00 - 11:30 Quick review and recall
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiDayPlanning;