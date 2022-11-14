import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useWindowSize } from "../../hooks/useWindowSize";

const ProgressbarSlider = ({itemsCount, children}) => {
    const windowSize = useWindowSize();
    const [pageCount, setPageCount] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let items_per_page = 3;
        if (windowSize.width <= 600) items_per_page = 1;
        else if (windowSize.width <= 1024) items_per_page = 2;
        setItemsPerPage(items_per_page);
    }, [windowSize.width])

    useEffect(() => {
        setPageCount(itemsCount + 1 - itemsPerPage);
    }, [itemsPerPage, itemsCount]);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 0,
        beforeChange: (current, next) => {
            if (current !== next) setActiveIndex(next);
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
        <div className="w-full overflow-hidden">
            <Slider {...settings}>
                { children }
            </Slider>
            <div className="w-[60%] md:w-[50%] lg:w-[30%] h-[2px] mx-auto my-[30px] bg-gray-800 overflow-hidden">
                <div className="h-[2px] bg-gray-500 transition-all" style={{width: `${(activeIndex + 1) * 100 / pageCount}%`}}></div>
            </div>
        </div>
    )

}
export default ProgressbarSlider;