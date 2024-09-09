import React from "react"

export default function SearchIcon({ isDarkMode, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDarkMode ? "#e5e5e5" : "#262626"}
            strokeWidth={isDarkMode ? "1" : "1.3"}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-3 top-2 size-6 text-neutral-500 dark:text-neutral-300"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
    )
}