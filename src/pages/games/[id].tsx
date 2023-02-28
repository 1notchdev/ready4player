import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import GameDetailsSection from "../../components/GameDetailsSection";
import GameRequirementsSection from "../../components/GameRequirementsSection";
import GameReviewsSection from "../../components/GameReviewsSection";
import GameSimilarsSection from "../../components/GameSimilarsSection";

const game_info:any = {
  title: "Assassin's Creed: Unity",
  description: "<p>Assassin's Creed® Unity is an action adventure game set in Paris during the French Revolution. This time you will play as your own hero. Take control of Arno by fully customizing his clothes and weapons. In addition to the epic single-player mode, Assassin's Creed Unity allows you to play online co-op with three friends on specific missions. Throughout the game, you will witness some turning moments in French history.</p><p>Assassin's Creed® Unity is an action adventure game set in Paris during the French Revolution. This time you will play as your own hero. Take control of Arno by fully customizing his clothes and weapons. In addition to the epic single-player mode, Assassin's Creed Unity allows you to play online co-op with three friends on specific missions. Throughout the game, you will witness some turning moments in French history.</p>",
  feature_img: "/images/game-feature.png",
  logo: "/images/game-logo.png",
  other_img: [
    "/images/game-thumb1.png",
    "/images/game-thumb2.png",
    "/images/game-thumb3.png",
    "/images/game-thumb1.png",
    "/images/game-thumb2.png",
    "/images/game-thumb3.png"
  ],
  price: 250,
  payment_method: ["USDC", "USDT"],
  developer: "Ubisoft",
  publisher: "Ubisoft",
  release_date: "2022-08-17T03:24:00",
  species: ["Action", "RPG"],
  platforms: ["Windows", "MacOS"],
  rating: 4.5,
  languages: ["English", "French", "Spanish", "Japanese", "Chinese"],
  requirements: {
    minimum: [
      {label: "OS", value: "Windows 10"},
      {label: "Processor", value: "Intel® Core™ i5-3470"},
      {label: "Memory", value: "6 GB RAM"},
      {label: "Graphics", value: "Nvidia GeForce GTX 770 2GB"},
      {label: "Network", value: "Interent Connection"},
      {label: "Storage", value: "150 GB Avanible Space"}
    ],
    recommended: [
      {label: "OS", value: "Windows 10"},
      {label: "Processor", value: "Intel® Core™ i5-6470"},
      {label: "Memory", value: "16 GB RAM"},
      {label: "Graphics", value: "Nvidia GeForce GTX 770 5GB"},
      {label: "Network", value: "Interent Connection"},
      {label: "Storage", value: "500 GB Avanible Space"}
    ]
  }
}

export default function GameDetails() {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id);
  const [gameInfo, setGameInfo] = useState({});
  useEffect(() => {
    if (id) {
      fetchGameInfo();
    }
  }, [id])
  
  const fetchGameInfo =async () => {
    // TODO: get game info by id
    setGameInfo(game_info);
  }
  return (
    <DefaultLayout>
      <div className="container flex flex-col gap-5 text-left text-slate-100">
        <GameDetailsSection game={gameInfo} />
        <GameRequirementsSection game={gameInfo} />
        <GameReviewsSection game={gameInfo} />
        <GameSimilarsSection />
      </div>
    </DefaultLayout>
  )
}
