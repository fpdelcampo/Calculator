import React from 'react'

export default function TileHolder({tiles}) {
    return (
        <div className='w-full h-[calc(100%-110px)] text-white grid grid-rows-5 grid-cols-4 gap-[10px]'>
            {tiles}
        </div>
    )
}
