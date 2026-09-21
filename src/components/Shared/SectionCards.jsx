const SectionCards = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-xl space-y-2 py-8 px-5">
            <span className="text-orange-500 text-2xl">
                {icon}
            </span>
            <h2 className="text-xl font-semibold mt-5">{title}</h2>
            <p className="text-sm text-slate-500">{description}</p>
        </div>
    );
};

export default SectionCards;