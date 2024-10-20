"use client"

import React, { useState, useEffect } from "react"
import { CoffeeIcon, GitHubIcon, MoonIcon, SunIcon, SearchIcon } from "../components/icons"
import Class from "@/components/dndClasses/Class"
import SpellQuery from "@/components/dndClasses/SpellQuery"
import Bookmarked from "@/components/dndClasses/Bookmarked"
import { BookmarkIcon } from "@/components/icons/cardIcons"

export default function Home() {
    const dndClasses = [
        'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard'
    ]

    const spellLevels = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ]

    // Leer dndClass y spellLevel del localStorage o usar valores por defecto
    const [dndClass, setDndClass] = useState<string>(() => localStorage.getItem('dndClass') || 'Bard')
    const [spellLevel, setSpellLevel] = useState<string>(() => localStorage.getItem('spellLevel') || '0')
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [bookmarked, setBookmarked] = useState(false)

    // Guardar dndClass y spellLevel en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem('dndClass', dndClass)
    }, [dndClass])

    useEffect(() => {
        localStorage.setItem('spellLevel', spellLevel)
    }, [spellLevel])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const handleDndClassClick = (chosenClass: string) => {
        setDndClass(chosenClass)
        setBookmarked(false)
    }

    const handleSpellLevelClick = (level: string) => {
        setSpellLevel(level)
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchQuery(inputValue)
            setBookmarked(false)
        }
    }

    const handleBookmarkedClick = () => {
        setBookmarked(true)
        setSearchQuery('')
    }

    const handleTitleClick = () => {
        setDndClass('Bard')
        setSpellLevel('0')
        setSearchQuery('')
        setInputValue('')
        setBookmarked(false)
    }

    return (
        <div className="dark:bg-neutral-800 bg-white h-[100vh]">
            <nav className='flex w-screen justify-between px-5 py-3 border-b dark:border-neutral-800 border-neutral-200'>
                <div className="flex gap-2">
                    <p onClick={handleTitleClick} className="font-bold dark:text-neutral-200 text-neutral-800">DnD Spell Manager</p>
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

            <nav className="flex justify-center py-2">
                <div className="relative md:w-1/2 w-[90%]">
                    <input
                        type="text"
                        placeholder="Look for a spell..."
                        className="w-full px-4 py-2 text-sm bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-white-400 dark:focus:ring-white-600 transition-all duration-300 text-neutral-700 dark:text-neutral-200"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <SearchIcon isDarkMode={isDarkMode} />
                </div>
            </nav>

            {searchQuery === '' && <nav className='flex md:justify-between lg:justify-around px-5 py-2 box-border gap-3 overflow-y-auto border-b dark:border-neutral-700 border-neutral-200 items-center'>
                <div style={{ backgroundColor: bookmarked === true ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: bookmarked === true ? (isDarkMode ? 'white' : '#383838') : (isDarkMode ? '#d5d5d5' : '#383838'), padding: bookmarked === true ? '0.4rem' : '', borderRadius: bookmarked === true ? '0.375rem' : '' }} onClick={() => handleBookmarkedClick()}>
                    <BookmarkIcon isDarkMode={isDarkMode} stroke={bookmarked === true ? (isDarkMode ? 'white' : '#383838') : (isDarkMode ? '#d5d5d5' : '#383838')} fill={bookmarked === true ? (isDarkMode ? '#383838' : '#d5d5d5') : (isDarkMode ? '#262626' : 'white')} />
                </div>
                {dndClasses.map((cls) => (
                    <div style={{ backgroundColor: dndClass === cls && bookmarked === false ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: dndClass === cls && bookmarked === false ? (isDarkMode ? 'white' : '#383838') : (isDarkMode ? '#d5d5d5' : '#383838'), padding: dndClass === cls && bookmarked === false ? '0.4rem' : '', borderRadius: dndClass === cls && bookmarked === false ? '0.375rem' : '' }} key={cls} onClick={() => handleDndClassClick(cls)}>{cls}</div>
                ))}
            </nav>}

            {searchQuery === '' && <nav className='flex justify-between lg:justify-around px-5 py-2 gap-3 overflow-y-auto border-b dark:border-neutral-700 border-neutral-200 items-center'>
                {spellLevels.map((lvl) => (
                    <div style={{ backgroundColor: spellLevel === lvl ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: spellLevel === lvl ? (isDarkMode ? 'white' : '#383838') : (isDarkMode ? '#d5d5d5' : '#383838'), padding: spellLevel === lvl ? '0.4rem' : '', borderRadius: spellLevel === lvl ? '0.375rem' : '' }} key={lvl} onClick={() => handleSpellLevelClick(lvl)}>{lvl === '0' ? 'Cantrip' : lvl}</div>
                ))}
            </nav>}

            <main className="pt-4">
                {searchQuery === '' && bookmarked === false && <Class spellLevel={spellLevel} dndClass={dndClass} isDarkMode={isDarkMode}/>}
                {searchQuery !== '' && bookmarked === false && <SpellQuery searchQuery={searchQuery} isDarkMode={isDarkMode}/>}
                {bookmarked === true && <Bookmarked spellLevel={spellLevel} bookmarked={bookmarked} isDarkMode={isDarkMode}/>}
            </main>
        </div >
    )
}
