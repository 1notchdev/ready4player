import Slider from "react-slick";
import { Game } from "../utils/Types";
import TagItems from "./TagItems";

const SliderPrevArrow = (props) => {
    return (
        <button onClick={props.onClick}
            className="bg-second rounded-full h-[2rem] w-[2rem] absolute left-0 top-[50%] z-20 -translate-y-1/2 -translate-x-1/2 border border-white border-opacity-10 flex justify-center items-center hover:-translate-x-[60%] duration-300"
        >
            <img src="/images/icons/arrow.svg" />
        </button>
    )
}

const SliderNextArrow = (props) => {
    return (
        <button onClick={props.onClick}
            className="bg-second rounded-full h-[2rem] w-[2rem] absolute right-0 top-[50%] z-20 -translate-y-1/2 translate-x-1/2 border border-white border-opacity-10 flex justify-center items-center rotate-180 hover:translate-x-[60%] duration-300"
        >
            <img src="/images/icons/arrow.svg" />
        </button>
    )
}

const games: Array<Game> = [
    {
        name: "Battefield V",
        image: "/images/image7.png",
        price: 33.99,
        salePrice: 11.99,
        sale: "-70%",
        tags: ["Adventure", "Action", "FPS"]
    },
    {
        name: "Dead by Daylight",
        image: "/images/spider.png",
        price: 33.99,
        salePrice: 11.99,
        sale: "-70%",
        tags: ["Adventure", "Sports", "RPG"]
    },
    {
        name: "Deathloop",
        image: "/images/gta5.jpeg",
        price: 22.99,
        salePrice: 22.99,
        sale: "",
        tags: ["Adventure", "Action", "Sports"]
    },
    {
        name: "Chivalry II",
        image: "/images/tibia.jpeg",
        price: 22.99,
        salePrice: 22.99,
        sale: "",
        tags: ["Adventure", "Action", "FPS"]
    }
];
const HomeHeroSection = () => {
    const settings = {
        className: "rp-slider",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <SliderPrevArrow />,
        nextArrow: <SliderNextArrow />,
        customPaging: (i) => {
            return (
                <a>
                    <span>{games[i]?.name}</span>
                </a>
            );
        },
      
    };
    return (
        <div className="container mx-auto">
            <div className="home-hero-slider w-full">
                <Slider {...settings}>
                    {
                        games.map((elem, idx) => (
                            <div key={idx}
                                className="w-full aspect-[3/4] md:aspect-[11/4] relative overflow-hidden outline-none align-top"
                            >
                                <img src={elem.image}
                                    className="w-full h-full object-cover object-center" />
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8">
                                    <TagItems tags={elem?.tags} />
                                    <div className="flex flex-col md:flex-row justify-between md:items-end">
                                        <div className="md:basis-7/12 flex flex-col gap-2">
                                            <p className="text-xl md:text-3xl font-bold">{elem.name}</p>
                                            <p className="text-sm">Eve: Valkyrie is a multiplayer dogfighting shooter game set in the Eve Online universe that is designed to use virtual reality headset technology. Originally launched for Microsoft Windows for use with the Oculus Rift virtual reality headset.</p>
                                        </div>
                                        <div className="md:basis-5/12 md:text-right">
                                            {/* <span>aaaa</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default HomeHeroSection;