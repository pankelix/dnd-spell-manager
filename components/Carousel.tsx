import React from "react"
import Slider from 'react-slick'
import Card from "./Card"
import { Spell } from "@/app/types"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface CarouselProps {
    spells: Spell[]
}

const Carousel: React.FC<CarouselProps> = ({ spells }) => {
    const slidesToShow = 4
    const isInfinite = spells.length > slidesToShow

    const settings = {
        infinite: isInfinite,
        speed: 500,
        slidesToShow: Math.min(slidesToShow, spells.length),
        slidesToScroll: spells.length > 2 ? 2 : 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(2, spells.length),
                    slidesToScroll: spells.length > 2 ? 1 : 1,
                    infinite: spells.length > 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: spells.length > 1,
                }
            }
        ]
    }

    return (
        <div className="slider-container">
            <Slider {...settings} >
                {spells && spells.map(spell => (
                    <div key={spell.index} className="px-1">
                        <Card spell={spell} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel