"use client"

import { useState } from "react";
import { CoffeeIcon, GitHubIcon, MoonIcon, SunIcon } from "../components/icons"
import { Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard } from '../components/dndClasses'

export default function Home() {
  const dndClasses = [
    'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard'
  ]

  const spellLevels = [
    'Cantrip', '1', '2', '3', '4', '5', '6', '7', '8'
  ]

  const [dndClass, setDndClass] = useState('Bard')
  const [spellLevel, setSpellLevel] = useState('Cantrip')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

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
    <body className={isDarkMode ? '' : 'light-mode'}>
      <nav className={`flex w-screen justify-between px-5 py-4 border-b ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
        <div>
          <p className="font-bold">DnD Spell Manager</p>
        </div>

        <div className="flex gap-2">
          <a href="http://#" target="_blank" rel="noopener noreferrer">
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

      <nav className={`flex px-5 py-4 box-border gap-3 overflow-y-auto border-b ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} items-center`}>
        <a>Create</a>
        {dndClasses.map((cls) => (
          <a style={{ backgroundColor: dndClass === cls ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: dndClass === cls ? (isDarkMode ? 'white' : '#383838') : '', padding: dndClass === cls ? '0.4rem' : '', borderRadius: dndClass === cls ? '0.375rem' : '' }} key={cls} onClick={() => handleDndClassClick(cls)}>{cls}</a>
        ))}
      </nav>

      <nav className={`flex justify-between px-5 py-4 gap-3 overflow-y-auto border-b ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} items-center`}>
        <a>🔰</a>
        {spellLevels.map((lvl) => (
          <a style={{ backgroundColor: spellLevel === lvl ? (isDarkMode ? '#383838' : '#d5d5d5') : '', color: spellLevel === lvl ? (isDarkMode ? 'white' : '#383838') : '', padding: spellLevel === lvl ? '0.4rem' : '', borderRadius: spellLevel === lvl ? '0.375rem' : '' }} key={lvl} onClick={() => handleSpellLevelClick(lvl)}>{lvl}</a>
        ))}
      </nav>

      <main>
        {dndClass === 'Bard' && <Bard spellLevel={spellLevel}/>}
        {dndClass === 'Cleric' && <Cleric spellLevel={spellLevel}/>}
        {dndClass === 'Druid' && <Druid spellLevel={spellLevel}/>}
        {dndClass === 'Paladin' && <Paladin spellLevel={spellLevel}/>}
        {dndClass === 'Ranger' && <Ranger spellLevel={spellLevel}/>}
        {dndClass === 'Sorcerer' && <Sorcerer spellLevel={spellLevel}/>}
        {dndClass === 'Warlock' && <Warlock spellLevel={spellLevel}/>}
        {dndClass === 'Wizard' && <Wizard spellLevel={spellLevel}/>}
      </main>
    </body>
  );
}
