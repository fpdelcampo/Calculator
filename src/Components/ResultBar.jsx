import React from 'react'
import { Textfit } from "react-textfit";

export default function ResultBar({content}) {
    return (
        <Textfit className="h-[100px] w-full py-0 px-[10px] mb-[10px] flex bg-slate-800 items-center justify-end box-border rounded-lg font-bold text-white" mode="single" max={70}>
            {content}
        </Textfit>
    )
}