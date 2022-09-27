import React from 'react'

export default function Tile({content, onClick}) {
    return (
        <button className="border-none bg-indigo-600 text-xl text-white font-bold cursor-pointer rounded-lg outline-none" onClick={onClick}>
            {content}
        </button>
    )
}
