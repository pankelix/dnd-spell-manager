import React, { useEffect, useState } from "react"
import { Spell, Spells } from '@/app/types'
import Carousel from "../Carousel"

interface BookmarkedProps {
    spellLevel: string
    bookmarked: boolean
}

const Bookmarked: React.FC<BookmarkedProps> = ({ spellLevel, bookmarked }) => {
    const [spells, setSpells] = useState<Spells>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        try {
            const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedSpells') || '[]')

            const filteredSpells: Spells = storedBookmarks.filter((spell: Spell) => spell.level === +spellLevel)

            setSpells(filteredSpells)
        } catch (error) {
            setError('Failed to retrieve the spells')
        } finally {
            setLoading(false)
        }
    }, [spellLevel, bookmarked])

    if (loading) {
        return <p className="text-center pt-10">Loading...</p>
    }

    if (error) {
        return <p className="text-center pt-10">No data available, try again</p>
    }

    return <>
        {spells.length > 0
            ? <Carousel spells={spells} />
            : <h3 className="text-center pt-10">{'You have no spells of level ' + (spellLevel === '0' ? 'Cantrip' : spellLevel) + ' bookmarked'}</h3>}
    </>
}

export default Bookmarked