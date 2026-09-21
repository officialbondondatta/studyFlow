import SectionHeader from "./Shared/SectionHeader";

const HowitWorks = () => {
    const title = "How it works"
    return (
        <section className="container mx-auto lg:mt-30 md:mt-30 mt-10">
            <SectionHeader title={title}></SectionHeader>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 p-5 lg:p-0">
                <div className="text-center space-y-3 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">01</span>
                    <h2 className="font-semibold text-xl">Set a goal</h2>
                    <p className="max-w-90 text-center text-slate-500">"Finish Calculus II with an A." Big, specific, and yours.</p>
                </div>
                <div className="text-center space-y-3 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">02</span>
                    <h2 className="text-xl font-semibold">Break it into daily tasks</h2>
                    <p className="max-w-90 text-slate-500">StudyFlow turns that goal into small tasks you can do today.
                    </p>
                </div>
                <div className="text-center space-y-3 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">03</span>
                    <h2 className="font-semibold text-xl">Watch your progress move</h2>
                    <p className="max-w-90 text-slate-500">Every task you check off fills the bar a little more.</p>
                </div>
            </div>
        </section>
    );
};

export default HowitWorks;