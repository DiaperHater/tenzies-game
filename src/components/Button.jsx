import React from "react"

export default function Button(props) {

    return (
        <button 
            className="
                flex items-center justify-center 
                w-[92px] h-[35px] 
                text-white font-semibold tracking-widest 
                bg-indigo-500 rounded 
                mt-5 mx-auto 
                hover:bg-indigo-700 duration-200
            "
            onClick={props.clickHandler}
        >
            Roll
        </button>
    )
}