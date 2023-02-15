import React from "react"
import Button from "./Button"

export default function Banner(props) {
    return (
        <div className="
                banner 
                flex flex-col items-center justify-center
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-10/12 h-[85%]
                bg-orange-600
                p-8                
        ">
            <p className="text-2xl text-white font-bold text-center uppercase">
                congratulations<br />
                you won!!!
            </p>
            <Button 
                extraStyleClasses="bg-black text-white hover:bg-black"
                label="Play Again" 
                clickHandler={props.callback} 
            />
        </div>
    )
}