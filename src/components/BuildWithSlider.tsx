type Slide = {
  name: string;
  imageSrc: string;
  price: number;
};

const slides: Array<Slide> = [
  {
    name: "Battlefield V",
    imageSrc: "./images/battlefield.png",
    price: 122.99,
  },
  { name: "OlliOlli World", imageSrc: "./images/olliolli.png", price: 77.99 },
  {
    name: "Battlefield V",
    imageSrc: "./images/battlefield.png",
    price: 122.99,
  },
  { name: "OlliOlli World", imageSrc: "./images/olliolli.png", price: 77.99 },
  {
    name: "Battlefield V",
    imageSrc: "./images/battlefield.png",
    price: 122.99,
  },
  { name: "OlliOlli World", imageSrc: "./images/olliolli.png", price: 77.99 },
];

export const BuildWithSlider = () => {
  return (
    <section className="w-full pl-[7rem]">
      <div className="h-[30rem] rounded-l-md bg-whiteWithoutOpacity flex p-8 gap-4">
        <div className="flex flex-col w-[20rem] h-full justify-between items-start">
          <p className="text-white opacity-[64%] text-xl">Build with</p>
          <h6 className="text-white text-3xl">Ready4Player</h6>
          <p className="text-white opacity-[64%] text-sm">
            Ready4Player is currently working with close to 30 Web3 guilds, 8
            Metaverse projects, 1 Gaming platform and 11 games to boost their
            sales.
          </p>
          <p className="text-white opacity-[64%] text-sm">
            Our team consists of 28 professionals and we are onboarding only
            high quality games and Metaverses to our library. Currently we add
            3-4 projects per week. Some of our projects in our library are AAA
            games.
          </p>
          <button className="bg-vibyBlue flex items-center p-2 rounded-md gap-2 hover:-translate-y-1 transition-all">
            <p>Get early access</p>
          </button>
        </div>
        <div className="flex gap-6">
          {slides.map((slide) => {
            return (
              <div
                className="h-full w-[20rem] bg-red-400 relative bottom-shadow"
                style={{
                  backgroundImage: `url(${slide.imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute left-4 bottom-4 flex flex-col text-white">
                  <p>{slide.name}</p>
                  <p className=" font-extralight">{slide.price} $USDT</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
