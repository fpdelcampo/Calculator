import React from 'react'

export default function Container({children}) {
    return (
        <div className='w-[340px] h-[540px] p-[10px] bg-gray-900 rounded-lg outline-none'>
            {children}
        </div>
    )
}
