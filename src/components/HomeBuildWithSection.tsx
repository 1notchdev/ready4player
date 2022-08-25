import { useState } from "react";
import { Game } from "../utils/Types";
import PrimaryButton from "./Buttons/PrimaryButton";
import GameCardAlt from "./Cards/GameCardAlt";
import TagItem from "./TagItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    tags: ["Adventure", "Action", "FPS"]
  },
  {
    name: "Deathloop",
    image: "./images/deathloop.jpg",
    price: 22.99,
    salePrice: 22.99,
    sale: "",
    tags: ["Adventure", "Action", "FPS"]
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
    tags: ["Adventure", "Action", "FPS"]
  },
];

const HomeBuildWithSection = () => {
  const settings = {
    className: "build-with-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    pauseOnHover: false
  };
  
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col lg:flex-row text-gray-100 rp-border-color border">
        <div className="rp-bg-dark basis-full lg:basis-5/12 p-3 lg:p-5 rp-border-color border-r">
          <p className="text-lg text-emerald-200">Build with</p>
          <p className="text-xl md:text-2xl lg:text-4xl text-emerald-200 font-semibold my-4">Ready4Player</p>
          <div className="flex gap-x-2">
            <TagItem>
              <span className="text-gray-500">Games:</span>
              <span className="font-semibold">423</span>
            </TagItem>
            <TagItem>
              <span className="text-gray-500">Gamers:</span>
              <span className="font-semibold">5,000+</span>
            </TagItem>
          </div>
          <p className="my-3">
            Ready4Player is currently working with close to 30 Web3 guilds, 8 Metaverse projects, 1 Gaming platform and 11 games to boost their sales.
          </p>
          <p>
            Our team consists of 28 professionals and we are onboarding only high quality games and Metaverses to our library. Currently we add 3-4 projects per week. Some of our projects in our library are AAA games.
          </p>
          <div>
            <PrimaryButton className="px-3 py-2 rounded mt-10 md:mt-20">Get early access</PrimaryButton>
          </div>
        </div>
        <div className="basis-full lg:basis-7/12 overflow-hidden flex items-center">
          <div className="w-full">
            <Slider {...settings}>
              {
                games.map((game, idx) => (
                  <GameCardAlt key={idx} gameData={game} />
                )) 
              }
            </Slider>
          </div>
          {/* <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={false}
            animationConfig={config.gentle}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default HomeBuildWithSection;