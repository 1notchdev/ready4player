import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInterval } from "../hooks/useInterval";

type ImageSlide = {
  tags: string[];
  title: string;
  description: string;
  imageSrc: string;
};

const images: Array<ImageSlide> = [
  {
    tags: ["Action", "Sci-Fi", "Marvel"],
    title: "Metaverse Spider-Man",
    description: "Super cool new spider man",
    imageSrc: "./images/spider.png",
  },
  {
    tags: ["FPS", "Wow", "To the moon $"],
    title: "Grand Theft Auto V",
    description: "Super cool new spider man",
    imageSrc: "./images/gta5.jpeg",
  },
  {
    tags: ["Nostalgia", "Brutal", "Exciting"],
    title: "Tibia",
    description: "Super cool new spider man",
    imageSrc: "./images/tibia.jpeg",
  },
  {
    tags: ["Nostalgia", "Brutal", "Exciting"],
    title: "Margonem",
    description: "Super cool new spider man",
    imageSrc: "./images/tibia.jpeg",
  },
];

export const CounterSlider = () => {
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const [delay, setDelay] = useState<number>(6);
  const [imageHeight, setImageHeight] = useState(22);

  const intervalRef = useInterval(() => {
    if (currentPhoto === images.length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  }, delay * 1000);

  return (
    <AnimatePresence>
      <div
        className={`w-4/5 rounded-t-md rounded-b-md relative transition-all duration-500 white-shadow h-[${imageHeight}rem]`}
      >
        <button
          onClick={() => {
            if (currentPhoto === 0) {
              setCurrentPhoto(images.length - 1);
            } else {
              setCurrentPhoto((i) => i - 1);
            }
          }}
          className="bg-second rounded-full h-[2rem] w-[2rem] absolute left-0 top-[50%] z-20 -translate-y-1/2 -translate-x-1/2 border border-white border-opacity-10 flex justify-center items-center hover:-translate-x-[60%] duration-300"
        >
          <img src="./images/arrow.svg" />
        </button>

        <button
          onClick={() => {
            if (currentPhoto === images.length - 1) {
              setCurrentPhoto(0);
            } else {
              setCurrentPhoto((i) => i + 1);
            }
          }}
          className="bg-second rounded-full h-[2rem] w-[2rem] absolute right-0 top-[50%] z-20 -translate-y-1/2 translate-x-1/2 border border-white border-opacity-10 flex justify-center items-center rotate-180 hover:translate-x-[60%] duration-300"
        >
          <img src="./images/arrow.svg" />
        </button>

        {images.map((i: ImageSlide, index) => {
          if (index === currentPhoto) {
            return (
              <div key={index + 100} className="h-full">
                {/* Image */}
                <motion.div
                  className={` w-full object-contain h-[${imageHeight}rem]`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    style={{
                      width: "100%",
                      minHeight: imageHeight + "rem",
                      backgroundImage: `url(${i.imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      borderTopLeftRadius: "0.375rem",
                      borderTopRightRadius: "0.375rem",
                    }}
                  >
                    <div className="top-0 left-0 right-0 bottom-0 absolute bottom-shadow"></div>
                  </div>
                </motion.div>

                {/* Tags, text, etc. */}
                <motion.div
                  className="absolute left-10 top-4 bottom-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex gap-6 flex-col h-full justify-between pb-16">
                    <div className="flex flec-col gap-6">
                      {i.tags.map((tag) => {
                        return (
                          <div
                            className="bg-white opacity-50 py-2 px-2 rounded-md"
                            key={tag}
                          >
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h6 className=" text-4xl text-white">{i.title}</h6>
                      <p className=" text-gray-200 font-extralight">
                        {i.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          }
        })}

        <div
          className={`absolute left-0 right-0 bottom-0 bg-main text-sm h-10 z-10 hidden md:flex`}
        >
          {images.map((i: ImageSlide, index) => {
            return (
              <div className="flex flex-col flex-1">
                {index === currentPhoto ? (
                  <motion.div
                    className={`h-[1px] bg-white"
                    }`}
                    initial={{
                      width: "100%",
                      backgroundColor: "white",
                      height: "1px",
                    }}
                    animate={{ width: 0 }}
                    transition={{ duration: delay }}
                  ></motion.div>
                ) : (
                  <div
                    className={`h-[1px] bg-gray-600 w-full"
                    }`}
                  ></div>
                )}

                <button
                  key={index}
                  className={`transition-all duration-100 flex-1 ${
                    index === currentPhoto ? " text-white" : " text-gray-400"
                  } hover:text-gray-200 hover:border-gray-200`}
                  onClick={() => setCurrentPhoto(index)}
                >
                  {i.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
};
