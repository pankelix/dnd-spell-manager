import React, { useEffect, useState } from "react"
import { Spells } from '@/app/types';

import { getSpellsByLevel } from '../../api/getSpellsByLevel'
import Carousel from "../Carousel";

interface ClassProps {
    spellLevel: string
    dndClass: string
}

const Class: React.FC<ClassProps> = ({ spellLevel, dndClass }) => {
    const [spells, setSpells] = useState<Spells | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    /* const [cards, setCards] = useState<number>(7) */


    useEffect(() => {
        const fetchSpells = async () => {
            setLoading(true)
            try {
                const allSpells: Spells = await getSpellsByLevel(spellLevel)

                const filteredSpellsByClass = allSpells.filter(spell => spell.classes.some(cls => cls.index === dndClass.toLowerCase()))

                setSpells(filteredSpellsByClass)
                console.log(filteredSpellsByClass)
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch Spells')
                setLoading(false)
            }
        }

        fetchSpells()
    }, [spellLevel, dndClass])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>No data available, try again</p>
    }

    return <>
        {/* <p>this is a {dndClass}</p>
        <p>{spellLevel}</p> */}

        {spells && <Carousel spells={spells} />}
    </>
}

export default Class