const Stats = () => {
    return (
        <div className="stats bg-white border w-full stats-vertical lg:stats-horizontal border-slate-300 border-l-0 border-r-0 rounded-none mt-15 mb-15">
            <div className="container mx-auto py-5 grid lg:grid-cols-4 grid-cols-2 text-center">
                <div className="stat">
                    <div className="stat-value text-[#0e7c66]">12,400+</div>
                    <div className="stat-desc">students using StudyFlow</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-[#0e7c66]">1.2M</div>
                    <div className="stat-title">tasks checked off</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-[#0e7c66]">89%</div>
                    <div className="stat-title">report better focus</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-[#0e7c66]">4.8/5</div>
                    <div className="stat-title">average rating</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;