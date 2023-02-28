import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const ScoreRating = ({rating=0}) => {
    return (
        <div className="flex gap-x-2 pr-3">
            <Rating
                value={rating?? 0}
                className="rp-rating"
                readOnly
            />
            <div className="bg-slate-600 rounded px-2 py-1">{rating? rating.toFixed(1) : "0.0"}</div>
        </div>
    )
}

export default ScoreRating;