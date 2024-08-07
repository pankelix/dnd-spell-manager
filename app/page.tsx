"use client"

import { useState, useEffect } from "react"
import { CoffeeIcon, GitHubIcon, MoonIcon, SunIcon, FilterIcon } from "../components/icons"
import Class from "@/components/dndClasses/Class"

export default function Home() {
    const dndClasses = [
        'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard'
    ]

    const spellLevels = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8'
    ]

    const [dndClass, setDndClass] = useState('Bard')
    const [spellLevel, setSpellLevel] = useState('0')
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const handleDndClassClick = (chosenClass: string) => {
        setDndClass(chosenClass)
    }

    const handleSpellLevelClick = (level: string) => {
        setSpellLevel(level)
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className="dark:bg-neutral-800 bg-white h-[100vh]">
            <nav className='flex w-screen justify-between px-5 py-3 border-b dark:border-neutral-800 border-neutral-200'>
                <div>
                    <p className="font-bold dark:text-neutral-200 text-neutral-800">DnD Spell Manager</p>
                </div>

                <div className="flex gap-2">
                    <a href="https://buymeacoffee.com/miguelariasdesign" target="_blank" rel="noopener noreferrer">
                        <CoffeeIcon isDarkMode={isDarkMode} />
                    </a>
                    <a href="https://github.com/pankelix/dnd-spell-manager" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon isDarkMode={isDarkMode} />
                    </a>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? <MoonIcon isDarkMode={isDarkMode} /> : <SunIcon isDarkMode={isDarkMode} />}
                    </button>
                </div>
            </nav>

            <nav className={'flex lg:justify-between px-5 py-2 box-border gap-3 overflow-y-auto border-b dark:border-neutral-700 border-neutral-200 items-center'}>
                {/* <a>Create</a> */}
                {/* <button onClick={}>
                    <FilterIcon isDarkMode={isDarkMode} />
                </button> */}
                {dndClasses.map((cls) => (
                    <div style={{ backgroundColor: dndClass === cls ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: dndClass === cls ? (isDarkMode ? 'white' : '#383838') : '', padding: dndClass === cls ? '0.4rem' : '', borderRadius: dndClass === cls ? '0.375rem' : '' }} key={cls} onClick={() => handleDndClassClick(cls)}>{cls}</div>
                ))}
            </nav>

            <nav className='flex justify-between px-5 py-2 gap-3 overflow-y-auto border-b dark:border-neutral-700 border-neutral-200 items-center'>
                {/* <a>🔰</a> */}
                {spellLevels.map((lvl) => (
                    <div style={{ backgroundColor: spellLevel === lvl ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: spellLevel === lvl ? (isDarkMode ? 'white' : '#383838') : '', padding: spellLevel === lvl ? '0.4rem' : '', borderRadius: spellLevel === lvl ? '0.375rem' : '' }} key={lvl} onClick={() => handleSpellLevelClick(lvl)}>{lvl === '0' ? 'Cantrip' : lvl}</div>
                ))}
            </nav>

            <main className="pt-4">
                {dndClass && <Class spellLevel={spellLevel} dndClass={dndClass} />}
            </main>
        </div >
    )
}
