import RatingCard from "./Shared/RatingCard";
import SectionHeader from "./Shared/SectionHeader";
const testimonials = [
    {
        id: 1,
        rating: 5,
        review:
            "I stopped rewriting the same to-do list every morning. Now I just open StudyFlow and my day is already there.",
        name: "Maya R.",
        role: "Pre-med",
        company: "Sophomore",
    },
    {
        id: 2,
        rating: 3,
        review:
            "StudyFlow keeps all my classes, assignments, and study sessions organized. I finally feel in control of my week.",
        name: "Daniel K.",
        role: "Computer Science",
        company: "Junior",
    },
    {
        id: 3,
        rating: 4,
        review:
            "Planning used to take more time than studying. Now I know exactly what to work on and when to do it.",
        name: "Sophia L.",
        role: "Business",
        company: "Senior",
    },
];
const Rating = () => {
    const title = "Students are getting more done"
    return (
        <section className="lg:mt-20 mt-10 container mx-auto">
            <SectionHeader title={title}></SectionHeader>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:grid-cols-3 items-center justify-center p-5 lg:p-0 ">
                {
                    testimonials.map(testimonial => (
                        <RatingCard key={testimonial.id} rating={testimonial}></RatingCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Rating;