import React, { useState, useEffect } from "react"
import { Spell } from "@/app/types"
import { AbjurationIcon, EnchantmentIcon, ConjurationIcon, IllusionIcon, TransmutationIcon, DivinationIcon, NecromancyIcon, EvocationIcon } from '../components/icons/dndSchools'
import { BookmarkIcon, ConcentrationIcon, MaterialIcon, RitualIcon, SomaticIcon, VerbalIcon } from '../components/icons/cardIcons'

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
}

const getSchoolColor = (school: string): string => {
    return schoolColors[school.toLowerCase()] || "black"
}

const Card: React.FC<CardProps> = ({ spell }) => {
    const schoolColor = getSchoolColor(spell.school.index)
    const dndClasses = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']
    const [isBookmarked, setIsBookmarked] = useState(false)

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedSpells') || '[]')
        setIsBookmarked(storedBookmarks.some((s: Spell) => s.index === spell.index))
    }, [spell.index])

    const handleBookmarkClick = () => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedSpells') || '[]')

        if (isBookmarked) {
            const updateBookmarks = storedBookmarks.filter((s: Spell) => s.index !== spell.index)
            localStorage.setItem('bookmarkedSpells', JSON.stringify(updateBookmarks))
        } else {
            storedBookmarks.push(spell)
            localStorage.setItem('bookmarkedSpells', JSON.stringify(storedBookmarks))
        }

        setIsBookmarked(!isBookmarked)
    }

    return (
        <div className="relative flex flex-col bg-white rounded-lg h-[70vh] dark:border-0 border-2 border-neutral-200">
            <header className="flex items-center rounded-t-lg max-h-20" style={{ backgroundColor: schoolColor }}>
                <div className="px-4 py-4 w-full flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center">
                        {spell.school.index === "abjuration" && <AbjurationIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "enchantment" && <EnchantmentIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "conjuration" && <ConjurationIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "illusion" && <IllusionIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "transmutation" && <TransmutationIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "divination" && <DivinationIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "necromancy" && <NecromancyIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                        {spell.school.index === "evocation" && <EvocationIcon className={'bg-white rounded-full'} fill={schoolColor} />}
                    </div>

                    <div className="flex-1 text-center">
                        <h1 className="text-xl font-bold text-white">{spell.name}</h1>
                        <h6 className="text-white">{spell.school.index.charAt(0).toUpperCase() + spell.school.index.slice(1)}</h6>
                    </div>
                </div>
            </header>

            <main>
                <div className="flex p-3 justify-between">
                    <div className="flex flex-col justify-between text-sm w-[70%]">
                        <div className="flex gap-3">
                            <h2 className="w-[40%]">Range</h2>
                            <h2 className="font-bold">{spell.range}</h2>
                        </div>
                        <div className="flex gap-3">
                            <h2 className="w-[40%] ">Duration</h2>
                            <h2 className="font-bold">{spell.duration.replace('minute', 'min')}</h2>
                        </div>
                        <div className="flex gap-3">
                            <h2 className="w-[40%] ">Cast time</h2>
                            <h2 className="font-bold">{spell.casting_time}</h2>
                        </div>
                        <div className="flex pt-2">
                            <VerbalIcon fill={spell.components.includes('V') ? 'black' : 'lightgrey'} />
                            <SomaticIcon fill={spell.components.includes('S') ? 'black' : 'lightgrey'} />
                            <RitualIcon fill={spell.ritual ? 'black' : 'lightgrey'} />
                            <ConcentrationIcon fill={spell.concentration ? 'black' : 'lightgrey'} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between text-sm">
                        {dndClasses.map((cls) => {
                            const isClassIncluded = spell.classes.some(spellClass => spellClass.index === cls.toLowerCase())
                            return (
                                <h2 key={cls} style={{ color: isClassIncluded ? schoolColor : 'lightgrey', fontWeight: isClassIncluded ? 'bold' : '' }}>{cls}</h2>
                            )
                        })}
                    </div>
                </div>

                {spell.material &&
                    <div className="px-2 flex items-center">
                        <div className="w-1/7">
                            <MaterialIcon fill={schoolColor} />
                        </div>
                        <div style={{ background: schoolColor }} className="w-full mr-2 rounded-lg text-white items-center p-2 h-14 overflow-y-auto">
                            <p className="text-sm">{spell.material}</p>
                        </div>
                    </div>
                }
                <div className="w-fit flex flex-col justify-between px-4">
                    <div>
                        <p className={`text-sm mt-2 overflow-y-auto ${spell.material ? spell.higher_level.length > 0 ? 'max-h-[18vh]' : 'max-h-[29vh]' : spell.higher_level.length > 0 ? 'max-h-[23vh]' : 'max-h-[34vh]'}`}
                        >{spell.desc.join(' ')}</p>
                    </div>
                    {spell.higher_level.length !== 0 &&
                        <div>
                            <p className='text-sm mt-2 overflow-y-auto max-h-[10vh]'><strong>At higher levels:</strong> {spell.higher_level}</p>
                        </div>}
                </div>

                <div className="absolute bottom-2 right-2">
                    <BookmarkIcon onClick={handleBookmarkClick} fill={isBookmarked ? schoolColor : 'lightgrey'} strokeWidth={'0'} />
                </div>
            </main >
        </div >
    )
}

export default Card