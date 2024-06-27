import React from "react"
import { Spell } from "@/app/types"

interface CardProps {
    spell: Spell
}

const Card: React.FC<CardProps> = ({ spell }) => {

    return (
        <div>
            <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg shadow-md p-4">
                <div>
                    <h2 className="text-xl font-bold">{spell.name}</h2>
                    <p className="mt-2">{spell.desc.join(' ')}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-4">
                    <span>Range: {spell.range}</span>
                    <span>Level: {spell.level}</span>
                </div>
            </div>


            <div className="w-full flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between w-[70%] h-[50vh] lg:w-[18%]">
                    <div className="text-center">
                        <div className="text-2xl font-bold">A</div>
                        <div className="text-red-500 text-xl">&hearts;</div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                        <div>Card Game</div>
                        <div>© 2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card