import SectionHeader from "./Shared/SectionHeader";
import { IoMdCheckmark } from "react-icons/io";

const PlanPricing = () => {
    const title = "Simple pricing"
    const description = "Start free. Upgrade if you outgrow it."

    const plans = [
        {
            id: 1,
            name: "Free",
            description: "Everything you need to get organized.",
            price: 0,
            expiry: "/ forever",
            features: [
                "Unlimited tasks and goals",
                "5 subjects",
                "Focus timer",
                "7-day history"
            ],
            cta: "Get started"
        },
        {
            id: 2,
            name: "Pro",
            description: "For students who want the full picture.",
            price: 6,
            expiry: "/ per month",
            features: [
                "Everything in Free",
                "Unlimited subjects",
                "AI day planning",
                "Full history and insights",
                "Priority support"
            ],
            cta: "Get started"
        }
    ];

    return (
        <section className="container mx-auto lg:mt-30 md:mt-20 mt-10 flex flex-col items-center justify-center">
            <SectionHeader title={title} description={description}></SectionHeader>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    plans.map(plan => (
                        <div key={plan.id} className={`bg-white ${plan.name === "Pro" ? "border-2 border-[#0e7c66]" : "border border-slate-300"} p-5 rounded-xl space-y-3 lg:max-w-120 w-full`}>
                            <h2 className="font-semibold text-xl">{plan.name}</h2>
                            <p className="text-slate-500">{plan.description}</p>
                            <h2 className="flex items-center gap-1 mt-5 mb-5">
                                <span className="text-3xl font-semibold">${plan.price}</span>
                                <span className="text-slate-500">{plan.expiry}</span>
                            </h2>
                            <div className="flex flex-col space-y-3">
                                {plan.features.map(feature => (
                                    <span className="flex items-center gap-2"><IoMdCheckmark className="text-[#0e7c66] text-lg font-bold]" />{feature}</span>
                                ))}
                            </div>
                            <button className={` ${plan.name === "Pro" ? "bg-[#0e7c66] text-white cursor-pointer" : "bg-white btn"}  py-2 rounded-xl w-full mt-2`}>Get Started</button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default PlanPricing;