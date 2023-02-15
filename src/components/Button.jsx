import React from "react"

export default function Button(props) {

    return (
        <button 
            className={`
                flex items-center justify-center 
                mini-w-[92px] h-[35px] 
                text-white font-semibold tracking-widest 
                bg-indigo-500 rounded 
                px-5 mt-5 mx-auto 
                hover:bg-indigo-700 duration-200
                ${props.extraStyleClasses}
            `}
            onClick={props.clickHandler}
        >
            {props.label}
        </button>
    )
}