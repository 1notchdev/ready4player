import { ChevronDownIcon } from "@heroicons/react/outline";
import SecondaryButton from "./Buttons/SecondaryButton";
import GameMetaInfoCard from "./Cards/GameMetaInfoCard";
import Languages from "./Languages";
import PageTitle from "./PageTitle";
import Platforms from "./Platforms";
import ScoreRating from "./ScoreRating";
import ProgressbarSlider from "./Sliders/ProgressbarSlider";

const GameDetailsSection = ({game}) => {
    return (
        <>
            <PageTitle title={game?.title} />
            <div className="flex flex-col md:flex-row text-slate-200 gap-y-2 items-center md:divide-x-2 divide-slate-500">
                <ScoreRating rating={game.rating} />
                <div className="px-3">
                    <Platforms platforms={game?.platforms} />
                </div>
                <div className="pl-3">
                    <Languages languages={game?.languages} />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="basis-2/3 flex flex-col gap-5 overflow-hidden">
                    {
                        game?.feature_img &&
                        <img src={game.feature_img}
                            className="w-full rounded-lg"
                            alt="Feature Image" />
                    }
                    <div dangerouslySetInnerHTML={{__html: game?.description}}
                        className="flex flex-col gap-5 font-light" />
                    {
                        game?.other_img?.length > 0 &&
                        <div className="w-full overflow-hidden">
                            <ProgressbarSlider itemsCount={game.other_img.length}>
                                {
                                    game.other_img.map((elem, idx) => (
                                        <div key={idx}
                                            className="px-2 outline-none"
                                        >
                                            <img src={elem}
                                                className="w-full h-[150px] object-cover object-center"
                                                alt="Game Image" />
                                        </div>
                                    )) 
                                }
                            </ProgressbarSlider>
                            <SecondaryButton className="w-full py-2 rounded text-center justify-center">
                                <span>Show more</span>
                                <ChevronDownIcon className="w-4 h-4" />
                            </SecondaryButton>
                        </div>
                    }
                </div>
                <div className="basis-1/3">
                    <GameMetaInfoCard game={game} />
                </div>
            </div>
        </>
    )
}

export default GameDetailsSection;