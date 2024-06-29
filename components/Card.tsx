import React from "react"
import { Spell } from "@/app/types"
import { AbjurationIcon, EnchantmentIcon, ConjurationIcon, IllusionIcon, TransmutationIcon, DivinationIcon, NecromancyIcon, EvocationIcon } from '../components/icons/dndSchools'

interface CardProps {
    spell: Spell
}

const schoolColors: { [key: string]: string } = {
    abjuration: "#6dc3d3",
    enchantment: "#b34485",
    conjuration: "#59326c",
    illusion: "#393f7d",
    transmutation: "#d98d2b",
    divination: "#d7cb42",
    necromancy: "#804539",
    evocation: "#b3263a",
};

const getSchoolColor = (school: string): string => {
    return schoolColors[school.toLowerCase()] || "black";
};

const Card: React.FC<CardProps> = ({ spell }) => {
    const schoolColor = getSchoolColor(spell.school.index)

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md">

            <header className="flex rounded-lg">
                <div className="w-full flex items-center justify-center gap-2" style={{ backgroundColor: schoolColor }}>
                    <div className="w-1/3 flex justify-center rounded-full bg-black">
                        {spell.school.index === 'abjuration' && <AbjurationIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'enchantment' && <EnchantmentIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'conjuration' && <ConjurationIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'illusion' && <IllusionIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'transmutation' && <TransmutationIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'divination' && <DivinationIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'necromancy' && <NecromancyIcon /* fill={schoolColor} */ />}
                        {spell.school.index === 'evocation' && <EvocationIcon /* fill={schoolColor} */ />}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{spell.name}</h2>
                    </div>

                    <div>
                        <h2>Lvl: {spell.level}</h2>
                    </div>
                </div>
            </header>


            <div className="w-fit h-[60vh] flex flex-col justify-between p-4">
                <div>

                    <p className="mt-2 h-[10vh] overflow-y-auto">{spell.desc.join(' ')}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-4">
                    <span>Range: {spell.range}</span>
                    <span>Level: {spell.level}</span>
                </div>
            </div>
        </div>
    )
}

export default Card