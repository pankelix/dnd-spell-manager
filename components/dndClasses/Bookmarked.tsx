import React, { useEffect, useState } from "react"
import { Spell, Spells } from '@/app/types'
import Carousel from "@/components/Carousel"
import Loading from "@/components/Loading"

interface BookmarkedProps {
    spellLevel: string
    bookmarked: boolean
    isDarkMode: boolean
}

const Bookmarked: React.FC<BookmarkedProps> = ({ spellLevel, bookmarked, isDarkMode }) => {
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
       return <Loading isDarkMode={isDarkMode}/>
    }

    if (error) {
        return <p className="text-center pt-10">No data available, try again</p>
    }

    return <>
        {spells.length > 0
            ? <Carousel spells={spells} />
            : <h3 className="text-center pt-10 dark:text-neutral-200">{'You have no spells of level ' + (spellLevel === '0' ? 'Cantrip' : spellLevel) + ' bookmarked'}</h3>}
    </>
}

export default Bookmarked