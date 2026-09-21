const SectionHeader = ({ title, description }) => {
    return (
        <div className="flex items-center flex-col space-y-3 mb-10 p-5 lg:p-0 ">
            <h2 className="text-center text-3xl max-w-120 font-semibold">{title}</h2>
            <p className="max-w-140 text-center text-slate-500">{description}</p>
        </div>
    );
};

export default SectionHeader;