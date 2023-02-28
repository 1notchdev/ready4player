import ScoreRating from "./ScoreRating";

const GameReviewItem = ({data, className=""}) => {
    return (
        <div className={`flex gap-x-5 ${className}`}>
            <img src={data.reviewer_photo}
                className="w-[48px] h-[48px] object-cover object-center"
                alt="User photo" />
            <div className="flex-1 flex flex-col gap-y">
                <p>{data.reviewer_name}</p>
                <div className="w-[150px]">
                    <ScoreRating rating={data.score} />
                </div>
                <div className="text-gray-500 mt-3"
                    dangerouslySetInnerHTML={{__html: data.comment}}
                />
            </div>
        </div>
    )
}

export default GameReviewItem;