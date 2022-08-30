import { ArrowRightIcon } from "@heroicons/react/outline";
import PrimaryButton from "./Buttons/PrimaryButton";
import { Article } from "../utils/Types";
import ArticleCard from "./Cards/ArticleCard";
import ProgressbarSlider from "./Sliders/ProgressbarSlider";

const articles:Array<Article> = [
    {
        name: "Ready4Player X Safle",
        description: "Ready4Player is thrilled to announce partnership with Safle. This next-gen crypto wallet is also a gateway to blockchain apps and NFTs.",
        posted_at: "2022-08-17T03:24:00",
        image: "./images/article1.jpg"
    },
    {
        name: "Top Metaverse Coins to Invest beyond Nov",
        description: "In this article and we sharing us list of potential coins focusing on Metaverse, NFTs and Gaming, for long-term investment.",
        posted_at: "2022-08-23T08:24:00",
        image: "./images/article2.jpg"
    },
    {
        name: "Thrilled to annaunce the R4P Investment Club”",
        description: "Massive R4P Token AirDrops & Unique NFT Giveaways. Whitelisting for token presales from Ready4Playern Ecosystem Partnerships ",
        posted_at: "2022-08-25T03:24:00",
        image: "./images/article3.jpg"
    },
    {
        name: "Ready4Player X Safle",
        description: "Ready4Player is thrilled to announce partnership with Safle. This next-gen crypto wallet is also a gateway to blockchain apps and NFTs.",
        posted_at: "2022-08-17T03:24:00",
        image: "./images/article1.jpg"
    },
    {
        name: "Top Metaverse Coins to Invest beyond Nov",
        description: "In this article and we sharing us list of potential coins focusing on Metaverse, NFTs and Gaming, for long-term investment.",
        posted_at: "2022-08-23T08:24:00",
        image: "./images/article2.jpg"
    },
    {
        name: "Thrilled to annaunce the R4P Investment Club”",
        description: "Massive R4P Token AirDrops & Unique NFT Giveaways. Whitelisting for token presales from Ready4Playern Ecosystem Partnerships ",
        posted_at: "2022-08-25T03:24:00",
        image: "./images/article3.jpg"
    }
]

const HomeArticlesSection = ({title}) => {
    // const [curIndex, setCurIndex] = useState(0);
    
    // useEffect(() => {
    //     const active_percent = (curIndex + 1)
    // }, [curIndex])
    
    return (
        <div className="container mx-auto">
            <div className="flex gap-x-3 items-center mb-3">
                <p className="text-gray-100 text-lg">{title}</p>
                <PrimaryButton className="rounded-full px-3 py-1 text-sm">
                    <span className="mr-1">View All</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </PrimaryButton>
            </div>
            <ProgressbarSlider itemsCount={articles.length}>
                {
                    articles.map((article, idx) => (
                        <div key={idx} className="px-2">
                            <ArticleCard article={article} />
                        </div>
                    )) 
                }
            </ProgressbarSlider>
        </div>
    )
}

export default HomeArticlesSection;