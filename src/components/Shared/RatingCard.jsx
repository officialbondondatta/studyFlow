const RatingCard = ({ rating }) => {
    return (
        <div className="bg-white p-5 space-y-3 rounded-xl">
            <span className="">
                {"⭐️ ".repeat(rating.rating)}
            </span>
            <p className="mt-3">" {rating.review} "</p>
            <div className="mt-5">
                <h2 className="font-semibold">{rating.name}</h2>
                <p className="text-slate-500 text-sm">
                    <span>
                        {rating.role},
                    </span>
                    <span>
                        {` ${rating.company}`}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RatingCard;