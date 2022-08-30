import { Rating } from "@smastrom/react-rating";
import ScoreBar from "./ScoreBar";

const ReviewState = ({data}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg w-[170px] h-[135px] flex flex-col items-center justify-center gap-3 relative">
                <p className="text-xl md:text-3xl text-center md:text-left font-semibold">{data?.average}</p>
                <Rating value={data?.average?? 0}
                    className="rp-rating"
                    readOnly />
                <span className="absolute bg-black text-xs text-gray-500 border rp-border-color rounded-full px-2 py-1 -bottom-[12px]">
                    {`${data?.counts} opinions`}
                </span>
            </div>
            {
                data?.scores?.length > 0 &&
                <div className="flex-1 flex flex-col h-full justify-space">
                {
                    data.scores.map((score, idx) => (
                        <ScoreBar key={idx} label={score.label} value={score.value} />
                    ))
                }
                </div>
            }
        </div>
    )
}
export default ReviewState;