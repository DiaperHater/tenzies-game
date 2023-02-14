import { useState } from 'react'
import Heading from './components/Heading'
import Matrix from './components/Matrix'
import Button from './components/Button'

function App() {

  return (
    <div className="App flex items-center justify-center min-h-screen">
      <main className="w-[360px] h-[380px] max-w-full max-h-full bg-slate-900 py-8 px-5">
        <div className="w-full h-full rounded-xl p-8 bg-gray-100">
          <Heading />
          <Matrix />
          <Button />
        </div>
      </main>
    </div>
  )
}

export default App
