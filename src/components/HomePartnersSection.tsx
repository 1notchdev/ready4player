import Slider from 'react-slick';

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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    touchMove: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className="w-full border-b-[0.5px] border-t-[0.5px] border-gray-600 py-4 overflow-hidden">
      <Slider {...settings}>
        {
          logos.map((path, idx) => (
            <div key={idx} className='px-3'>
              <img src={path} className="gray-image w-auto h-16 mx-auto object-contain" />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default HomePartnersSection;