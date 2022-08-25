import { ArrowRightIcon } from "@heroicons/react/outline";
import PrimaryButton from "./Buttons/PrimaryButton";
import { Article } from "../utils/Types";
import ArticleCard from "./Cards/ArticleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 0,
        beforeChange: (current, next) => {
            console.log(current);
            console.log(next);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container mx-auto">
            <div className="flex gap-x-3 items-center mb-3">
                <p className="text-gray-100 text-lg">{title}</p>
                <PrimaryButton className="rounded-full px-3 py-1 text-sm">
                    <span className="mr-1">View All</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </PrimaryButton>
            </div>
            <div className="w-full overflow-hidden pb-[40px]">
                <Slider {...settings}>
                {
                    articles.map((article, idx) => (
                        <div className="px-2">
                            <ArticleCard key={idx} article={article} />
                        </div>
                    )) 
                }
                </Slider>
            </div>
        </div>
    )
}

export default HomeArticlesSection;