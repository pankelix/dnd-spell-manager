import React, { useEffect, useState } from "react"
import Card from "../Card";

interface BardProps {
    spellLevel: string
    dndClass: string
}

interface BardData {
    name: string;
}



const Bard: React.FC<BardProps> = ({ spellLevel, dndClass }) => {
    const [bardData, setBardData] = useState<BardData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [cards, setCards] = useState<number>(7)

    const getBardData = async () => {
        const response = await fetch('https://www.dnd5eapi.co/api/classes/bard')
        const data = await response.json()
        return data
    }


    useEffect(() => {
        const fetchBardData = async () => {
            try {
                const data = await getBardData()
                setBardData(data)
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch Bard data')
                setLoading(false)
            }
        }

        fetchBardData()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>No data available, try again</p>
    }

    return <>
        <p>this is a Bard</p>
        <p>{spellLevel}</p>
        {bardData && <p>{bardData.name}</p>}
        <Card />
    </>
}

export default Bard