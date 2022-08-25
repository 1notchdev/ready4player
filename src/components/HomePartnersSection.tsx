import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const logos = [
  "./images/logo.png",
  "./images/axielogo.webp",
  "./images/rarible.png",
  "./images/logo.png",
  "./images/axielogo.webp",
  "./images/rarible.png",
  "./images/logo.png",
  "./images/axielogo.webp",
  "./images/rarible.png",
  "./images/logo.png",
  "./images/axielogo.webp",
  "./images/rarible.png"
];

const HomePartnersSection = () => {
  const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 8,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1280, min: 768 },
			items: 6,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
  
  return (
    <div className="w-full border-b-[0.5px] border-t-[0.5px] border-gray-600 py-4">
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay
        autoPlaySpeed={4}
        centerMode={true}
        customTransition="all 4s linear"
        draggable={false}
        swipeable={false}
        focusOnSelect={false}
        infinite
        keyBoardControl={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        transitionDuration={4000}
      >
        {logos.map((path, idx) => {
          return <img key={idx} src={path} className="gray-image h-16 mx-auto"></img>;
        })}
      </Carousel>
      {/* <div className="w-[150%] flex items-center h-20 justify-around absolute left-0 animate">
        {logos.map((path, idx) => {
          return <img key={idx} src={path} className="gray-image h-16"></img>;
        })}
      </div> */}
    </div>
  );
}

export default HomePartnersSection;