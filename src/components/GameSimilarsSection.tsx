import { ArrowRightIcon } from "@heroicons/react/outline";
import { Game } from "../utils/Types";
import PrimaryButton from "./Buttons/PrimaryButton";
import GameCard from "./Cards/GameCard";

const games: Array<Game> = [
    {
        name: "Dead by Daylight",
        image: "/images/deadbydaylight.jpg",
        price: 33.99,
        salePrice: 11.99,
        sale: "-70%",
        tags: ["Adventure", "Action", "FPS"]
    },
    {
        name: "Deathloop",
        image: "/images/deathloop.jpg",
        price: 22.99,
        salePrice: 22.99,
        sale: "",
        tags: ["Adventure", "Action", "FPS"]
    },
    {
        name: "Chivalry II",
        image: "/images/chivalry.jpg",
        price: 22.99,
        salePrice: 22.99,
        sale: "",
        tags: ["Adventure", "Action", "FPS"]
    },
    {
        name: "Marvel's Guardians of the Galaxy",
        image: "/images/guardians.jpg",
        price: 33.99,
        salePrice: 11.99,
        sale: "-70%",
        tags: ["Adventure", "Action", "FPS"]
    },
];
const GameSimilarsSection = () => {
    return (
        <div className="w-full mt-10">
            <div className="flex gap-x-3 items-center mb-3">
                <p className="text-gray-100 text-lg">You may also like them</p>
                <PrimaryButton className="rounded-full px-3 py-1 text-sm">
                    <span className="mr-1">View All</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </PrimaryButton>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                games?.length > 0 && games.map((game, idx) => (
                    <GameCard key={idx} gameData={game} />
                ))
            }
            </div>
        </div>
    )
}

export default GameSimilarsSection;