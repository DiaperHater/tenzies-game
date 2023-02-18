import React from "react"

export default function Info(props) {
    
    return (
        <p className="text-[#2B283A]  leading-5 p-2 border border-indigo-500 mb-5">
            Rolls count: {props.rollsCount}
        </p>
    )
}