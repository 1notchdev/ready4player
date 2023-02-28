import { formatDate } from "../../utils/Helpers";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import Payments from "../Payments";

const GameMetaInfoCard = ({game}) => {
    return (
        <div className="bg-white/[0.02] rounded-lg border border-white/[0.07] flex flex-col gap-3 p-3 md:p-5">
            {
                game?.logo &&
                <img src={game.logo}
                    className="w-[180px] mx-auto" />
            }
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Price:</span>
                <span>${(game?.price | 0).toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Payment in:</span>
                <div><Payments payments={game?.payment_method} /></div>
            </div>
            <PrimaryButton className="w-full py-2"><span>Buy Now</span></PrimaryButton>
            <SecondaryButton className="w-full py-2"><span>Add to Cart</span></SecondaryButton>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Developer:</span>
                <span>{game?.developer}</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Publisher:</span>
                <span>{game?.publisher}</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Release date:</span>
                <span>{formatDate(game?.release_date)}</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Species:</span>
                <span>{game?.species?.join(", ")}</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500">Platform:</span>
                <span>{game?.platforms?.join(", ")}</span>
            </div>
        </div>
    )
    
}

export default GameMetaInfoCard;