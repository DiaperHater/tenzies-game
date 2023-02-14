import { useState } from 'react'

function App() {

  return (
    <div className="App flex items-center justify-center min-h-screen">
      <main className="w-[360px] h-[380px] max-w-full max-h-full bg-slate-900 py-8 px-5">
        <div className="w-full h-full rounded-xl p-8 bg-gray-100">
          <h1 className="text-[#2B283A] text-[25px] font-bold text-center">Tenzies</h1>
          <p className="text-[#2B283A]  leading-5 text-center mb-5">
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
          <div className="numbers grid grid-cols-5 gap-y-6">
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white frozen">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
            <div className="flex items-center justify-center w-[35px] h-[35px] mx-auto text-black text-2xl font-semibold rounded shadow-md bg-white">1</div>
          </div>
          <button className="flex items-center justify-center w-[92px] h-[35px] text-white font-semibold tracking-widest bg-indigo-500 rounded mt-5 mx-auto hover:bg-indigo-700 duration-200">Roll</button>
        </div>
      </main>
    </div>
  )
}

export default App
