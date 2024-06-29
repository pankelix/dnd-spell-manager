import React from "react"
import Slider from 'react-slick'
import Card from "./Card"
import { Spell } from "@/app/types"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface CarouselProps {
    spells: Spell[] | null
}

const Carousel: React.FC<CarouselProps> = ({ spells }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
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
        <div className="slider-container">
            <Slider {...settings} >
                {spells && spells.map((spell, index) => (
                    <div key={index} className="p-2">
                        <Card spell={spell} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel