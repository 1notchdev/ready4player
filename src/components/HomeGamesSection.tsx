import { useEffect, useState } from "react";
import { Game } from "../utils/Types";
import GameCard from "./Cards/GameCard";

const categories:Array<string> = [
  "All", "Action", "Sports", "RPG", "Strategy", "Racing", "Free to Play", "Casual", "Adventure"
];

const games: Array<Game> = [
  {
    name: "Battefield V",
    image: "./images/battlefield.jpg",
    price: 33.99,
    salePrice: 11.99,
    sale: "-70%",
    tags: ["Adventure", "Action", "FPS"]
  },
  {
    name: "Dead by Daylight",
    image: "./images/deadbydaylight.jpg",
    price: 33.99,
    salePrice: 11.99,
    sale: "-70%",
    tags: ["Adventure", "Sports", "RPG"]
  },
  {
    name: "Deathloop",
    image: "./images/deathloop.jpg",
    price: 22.99,
    salePrice: 22.99,
    sale: "",
    tags: ["Adventure", "Action", "Sports"]
  },
  {
    name: "Chivalry II",
    image: "./images/chivalry.jpg",
    price: 22.99,
    salePrice: 22.99,
    sale: "",
    tags: ["Adventure", "Action", "FPS"]
  },
  {
    name: "Marvel's Guardians of the Galaxy",
    image: "./images/guardians.jpg",
    price: 33.99,
    salePrice: 11.99,
    sale: "-70%",
    tags: ["Adventure", "Action", "Sports"]
  },
];

const HomeGamesSection = () => {
  const [filter, setFilter] = useState("All");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (filter === "All") setFiltered(games);
    else {
      const _filtered = games.filter(game => game.tags.includes(filter));
      setFiltered(_filtered);
    }
  }, [filter])
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-4">
        <div className="bg-neutral-900 p-1 rounded-lg flex gap-x-1">
          {
            categories.map((category, idx) => (
              <button key={idx} className={`text-slate-100 px-3 py-2 rounded text-sm font-normal ${filter===category?"bg-neutral-700":"bg-transparent"}`}
                onClick={() => setFilter(category)}
              >{category}</button>
            ))
          }
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          filtered?.map((game, idx) => (
            <GameCard key={idx} gameData={game} />
          ))
        }
      </div>
    </div>
  )
}

export default HomeGamesSection;