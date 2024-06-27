import React from "react"
import Slider from 'react-slick'
import Card from "./Card"
import { Spell } from "@/app/types"
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"

interface CarouselProps {
    spells: Spell[] | null
}

const Carousel: React.FC<CarouselProps> = ({ spells }) => {
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="w-full">
            <Slider {...settings} >
                {spells.map((spell, index) => (
                    <div key={index} className="p-2">
                        <Card spell={spell} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel