import { FaArrowRight } from "react-icons/fa";
const Marketting = () => {
    const title = "Your next study session could be the one that sticks"
    const description = "Set your first goal in under two minutes. No credit card required."
    return (
        <section className="container mx-auto lg:mt-20 mt-10 p-5 lg:p-0 max-w-250">
            <div className="bg-white rounded-xl flex items-center flex-col justify-center space-y-4 p-12 text-center">
                <h2 className="text-3xl font-semibold text-center max-w-140">{title}</h2>
                <p className="">{description}</p>
                <button className="btn text-white py-7 px-8 bg-[#0e7c66] rounded-xl">Start for free <FaArrowRight className="text-white ml-2" />
                </button>
            </div>
        </section>
    );
};

export default Marketting;