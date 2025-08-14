import { useState } from 'react'

import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id='pokedex-heading'><Link to="/">Pokedex</Link></h1>
      <CustomRoutes />
    </>
  )
}

export default App
