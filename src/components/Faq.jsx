import SectionHeader from "./Shared/SectionHeader";

const Faq = () => {
    const title = "Frequently asked questions"
    const faqs = [
        {
            id: "account-required",
            question: "Do I need to create an account to try it?",
            answer:
                "No. You can try StudyFlow without creating an account. An account is only needed to save your data and access it across devices."
        },
        {
            id: "data-storage",
            question: "Where is my data stored?",
            answer:
                "Your StudyFlow data is securely stored in the cloud, so you can access your tasks, goals, and progress whenever you sign in."
        },
        {
            id: "multiple-subjects",
            question: "Can I use StudyFlow for more than one subject?",
            answer:
                "Yes. The Free plan includes up to 5 subjects, while the Pro plan gives you unlimited subjects."
        },
        {
            id: "ai-day-planner",
            question: "What does the AI day planner actually do?",
            answer:
                "The AI day planner helps organize your tasks into a realistic daily schedule based on your priorities, goals, and available time."
        },
        {
            id: "mobile-version",
            question: "Is there a mobile version?",
            answer:
                "StudyFlow is designed to work smoothly on mobile devices, so you can manage your tasks and goals from your phone or tablet."
        }
    ];

    return (
        <section className="container mx-auto p-5 lg:p-0 lg:mt-20 mt-10 max-w-180">
            <SectionHeader title={title}></SectionHeader>
            <div className="flex flex-col gap-5">
                {
                    faqs.map(faq => (
                        <div key={faq.id} className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
                                <summary className="collapse-title font-semibold">{faq.question}</summary>
                                <div className="collapse-content text-slate-500 text-sm">{faq.answer}</div>
                            </details>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Faq;