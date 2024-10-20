import React, { useEffect, useState } from "react"
import { Spells } from '@/app/types'

import { getSpellsByLevel } from '../../api/getSpellsByLevel'
import Carousel from "../Carousel"

interface ClassProps {
    spellLevel: string
    dndClass: string
}

const Class: React.FC<ClassProps> = ({ spellLevel, dndClass }) => {
    const [spells, setSpells] = useState<Spells>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchSpells = async () => {
            setLoading(true)
            try {
                const allSpells: Spells = await getSpellsByLevel(spellLevel)

                const filteredSpellsByClass = allSpells.filter(spell => spell.classes.some(cls => cls.index === dndClass.toLowerCase()))

                setSpells(filteredSpellsByClass)
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch Spells')
                setLoading(false)
            }
        }

        fetchSpells()
    }, [spellLevel, dndClass])

    if (loading) {
        return <p className="text-center pt-10 dark:text-neutral-200">Loading...</p>
    }

    if (error) {
        return <p className="text-center pt-10">No data available, try again</p>
    }

    return <>
        {spells.length > 0
            ? <Carousel spells={spells} />
            : <h3 className="text-center pt-10 dark:text-neutral-200">{'A ' + dndClass + ' has not spells of level ' + (spellLevel === '0' ? 'Cantrip' : spellLevel)}</h3>}
    </>
}

export default Class