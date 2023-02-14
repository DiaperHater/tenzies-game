import React from "react"

export default function Matrix(props) {
       
    const cellElements = props.cellList.map(cell => {
        return ( 
            <div 
                key={cell.id}
                id={`cell-${cell.id}`}
                className={`
                    flex items-center justify-center 
                    w-[35px] h-[35px] mx-auto 
                    text-black text-2xl font-semibold 
                    rounded shadow-md ${cell.on ? 'bg-[#59E391]' : 'bg-white'}
                    cursor-pointer
                `}
                onClick={() => {props.clickHandler(cell.id)}}
            >
                {cell.value}
            </div> 
        )
    })

    return (
        <div className="numbers grid grid-cols-5 gap-y-6">
            {cellElements}                    
        </div>
    )
}