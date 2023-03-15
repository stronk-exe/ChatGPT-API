import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Rout path='/chat' element={<CharacterData />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
