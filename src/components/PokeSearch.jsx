import { useState } from "react"

function PokeSearch({newPokemon}){
    const [newSearchTerm, setNewSearchTerm] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("submitting:", newSearchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
        <label >
            
        </label>
        <br></br>
            <input id = "pokeSearch" type="text" placeholder="Enter pokemon here..." >
            </input>
            <button type="submit" >
                Search
            </button>
    </form>)
}

export default PokeSearch