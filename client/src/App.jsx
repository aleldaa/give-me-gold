import { useEffect, useState } from 'react'
import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
