import { useRef } from "react";

type Slide = {
  name: string;
  imageSrc: string;
  price: number;
};

const slides: Array<Slide> = [
  { name: "Axie Infinity", imageSrc: "./images/axie.png", price: 122.99 },
  { name: "Light Nitex", imageSrc: "./images/lightnitex.png", price: 77.99 },
  { name: "Sandbox", imageSrc: "./images/sandbox.png", price: 18.99 },
  { name: "Axie Infinity", imageSrc: "./images/axie.png", price: 122.99 },
  { name: "Light Nitex", imageSrc: "./images/lightnitex.png", price: 77.99 },
  { name: "Sandbox", imageSrc: "./images/sandbox.png", price: 18.99 },
  { name: "Axie Infinity", imageSrc: "./images/axie.png", price: 122.99 },
  { name: "Light Nitex", imageSrc: "./images/lightnitex.png", price: 77.99 },
  { name: "Sandbox", imageSrc: "./images/sandbox.png", price: 18.99 },
];

export const OfferSlider = ({ title }) => {
  const scrollRef = useRef(null);

  const buttonClick = (dir) => {
    scrollRef.current.scrollLeft += dir * (336 + 32);
    console.log("scrolling");
  };

  return (
    <section className="w-full flex flex-col gap-8 pl-[7rem] py-10 relative">
      <div className="absolute right-0 top-0 bottom-0 w-[100%] right-shadow pointer-events-none z-10"></div>

      <div className="flex w-full items-center justify-between pr-[10rem]">
        <div className="flex gap-4">
          <p className="uppercase text-gray-500">{title}</p>
          <span className="text-vibyBlue underline">View all</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => buttonClick(-1)}
            className="bg-second rounded-full h-[2rem] w-[2rem] border border-white border-opacity-10 flex justify-center items-center hover:-translate-x-[5px] hover:bg-purple-500 duration-300"
          >
            <img src="./images/arrow.svg" />
          </button>
          <button
            onClick={() => buttonClick(1)}
            className="bg-second rounded-full h-[2rem] w-[2rem] border border-white border-opacity-10 flex justify-center items-center hover:translate-x-[5px] hover:bg-purple-500 duration-300 rotate-180"
          >
            <img src="./images/arrow.svg" />
          </button>
        </div>
      </div>
      <div
        className="w-full overflow-x-scroll relative no-scrollbar scroll-smooth"
        ref={scrollRef}
      >
        <div className="flex w-full gap-8 ">
          {slides.map((slide) => {
            return (
              <div className="flex flex-col gap-4 hover:cursor-pointer hover:-translate-y-4 transition-all duration-200">
                <div
                  style={{
                    backgroundImage: `url(${slide.imageSrc})`,
                    width: "21rem",
                    height: "13rem",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="flex w-full justify-between">
                  <div className="flex flex-col text-white gap-1">
                    <p className="">{slide.name}</p>
                    <p className=" font-extralight text-xs">
                      {slide.price} $USDT
                    </p>
                  </div>
                  <div>
                    <img src="./images/windows.svg" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
