import React, { useEffect, useState } from "react"
import { Spells } from '@/app/types'

import { getSpellsByName } from '@/api/getSpellsByName'
import Carousel from "@/components/Carousel"
import Loading from "@/components/Loading"

interface SpellQueryProps {
    searchQuery: string
    isDarkMode: boolean
}

const SpellQuery: React.FC<SpellQueryProps> = ({ searchQuery, isDarkMode }) => {
    const [spells, setSpells] = useState<Spells>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchSpells = async () => {
            setLoading(true)
            setError(null)
            try {
                const queriedSpells: Spells = await getSpellsByName(searchQuery)

                console.log(queriedSpells)
                if (queriedSpells && queriedSpells.length > 0) {
                    setSpells(queriedSpells)
                } else {
                    setError('No spells found for this search.')
                }


                setLoading(false)
            } catch (error) {
                console.error('Error fetching spells:', error)
                setError('Failed to fetch Spells')
                setLoading(false)
            }
        }

        fetchSpells()
    }, [searchQuery])

    if (loading) {
        /* return <p className="text-center pt-10 dark:text-neutral-200">Loading...</p> */
        return <Loading isDarkMode={isDarkMode}/>
    }

    if (error) {
        return <p className="text-center pt-10">No data available, try again</p>
    }

    return <>
        {spells.length > 0
            ? <Carousel spells={spells} />
            : <h3 className="text-center pt-10">{'A has not spells of level'}</h3>}
    </>
}

export default SpellQuery