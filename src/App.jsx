import { useState } from 'react'
import IdNameImg from "./components/Id-name-img"
import List from "./components/ListOfInfo"
import Title from "./components/Title"
import PokeSearch from './components/PokeSearch'

function App() {
  const [pokemon, newPokemon] = useState([])

 
  
  return (
    <div>
      <Title /><PokeSearch setPokemon={newPokemon}/>
      <br/>
      <IdNameImg/>
    </div>
  )
}

export default App
