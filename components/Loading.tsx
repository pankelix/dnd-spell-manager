import React, { useState, useEffect } from "react"
import { ConcentrationIcon, MaterialIcon, RitualIcon, SomaticIcon, VerbalIcon } from '../components/icons/cardIcons'

interface LoadingProps {
    isDarkMode: boolean
}

const Loading: React.FC<LoadingProps> = ({ isDarkMode }) => {
    const fillColor = isDarkMode ? "#d4d4d4" : "#525252"

    return (
        <article className="relative flex flex-col justify-center items-center rounded-lg h-[70vh] dark:border-0 border-2 border-neutral-200">
            <aside className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                    <VerbalIcon fill={fillColor} />
                    <p className="text-neutral-800 dark:text-neutral-200">Verbal</p>
                </div>
                <div className="flex items-center gap-2">
                    <SomaticIcon fill={fillColor} />
                    <p className="text-neutral-800 dark:text-neutral-200">Somatic</p>
                </div>
                <div className="flex items-center gap-2">
                    <RitualIcon fill={fillColor} />
                    <p className="text-neutral-800 dark:text-neutral-200">Ritual</p>
                </div>
                <div className="flex items-center gap-2">
                    <ConcentrationIcon fill={fillColor} />
                    <p className="text-neutral-800 dark:text-neutral-200">Concentration</p>
                </div>
            </aside>
        </article>
    )
}

export default Loading