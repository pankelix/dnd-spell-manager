import React from "react"

export default function BookmarkIcon({ ...props }) {
    return (
        <svg
            onClick={props.onClick}
            id="bookmark-icon"
            width="24"
            height="24"
            fill={props.fill}
            stroke={props.isDarkMode ? "#e5e5e5" : "#262626"}
            strokeWidth={props.strokeWidth ? props.strokeWidth : props.isDarkMode ? "1" : "1.3"}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" /></svg>
    )
}