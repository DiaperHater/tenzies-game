import React from "react"

export default function Info(props) {
    
    return (
        <p 
            className="
                flex justify-between
                text-[#2B283A] leading-5 
                p-2 
                border border-indigo-500 
                mb-5
            "
        >
            <span>Rolls count: {props.rollsCount}</span><span>Record: {props.record}</span>
        </p>
    )
}