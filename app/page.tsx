"use client"

import { useState } from "react";
import {Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard} from './components/dndClasses'

export default function Home() {

  const dndClasses = [
    'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard'
  ]

  const spellLevels = [
    'Cantrip', '1', '2', '3', '4', '5', '6', '7', '8'
  ]

  const [dndClass, setDndClass] = useState('')
  const [spellLevel, setSpellLevel] = useState('')

  const handleDndClassClick = (chosenClass: string) => {
    setDndClass(chosenClass)
  }

  const handleSpellLevelClick = (level: string) => {
    setSpellLevel(level)
  }

  return (
    <body>
      <nav className="flex w-screen justify-between px-5 py-4 border-b border-neutral-800">
        <div>
          <p className="font-bold">Home</p>
        </div>

        <div className="flex">
          <p>💢</p>
          <p>💥</p>
          <p>🌙</p>
        </div>
      </nav>

      <nav className="flex px-5 py-4 gap-3 overflow-y-auto border-b border-neutral-800">
        <a>Create</a>
        {dndClasses.map((cls) => (
          <a key={cls} onClick={() => handleDndClassClick(cls)}>{cls}</a>
        ))}
      </nav>

      <nav className="flex justify-between px-5 py-4 gap-3 overflow-y-auto border-b border-neutral-800">
        <a>🔰</a>
        {spellLevels.map((cls) => (
          <a key={cls} onClick={() => handleSpellLevelClick(cls)}>{cls}</a>
          ))}
      </nav>

      <main>
        {dndClass === 'Bard' && <Bard />}
        {dndClass === 'Cleric' && <Cleric />}
        {dndClass === 'Druid' && <Druid />}
        {dndClass === 'Paladin' && <Paladin />}
        {dndClass === 'Ranger' && <Ranger />}
        {dndClass === 'Sorcerer' && <Sorcerer />}
        {dndClass === 'Warlock' && <Warlock />}
        {dndClass === 'Wizard' && <Wizard />}
      </main>
    </body>
  );
}
