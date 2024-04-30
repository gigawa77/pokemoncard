import { useEffect, useState } from 'react'
import axios from 'axios'

function IdNameImg(props){
  const {searchTerm} = props
  console.log(props)
    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(response =>{

        console.log(response.data)
      })


        // fetch('https://pokeapi.co/api/v2/pokemon/weedle')
        // .then((response) => {
        //     return response.json()
        // })
        // .then((data) => {
        //     pokemon.id = data.id
        //     pokemon.name = data.name
        //     pokemon.img = data.sprites.front_default
        //   console.log(pokemon.img)
        // });
    },[])

    return (<div>
      <h1 id="pokemon_id" >{`Pokemon Name: #${pokemon.id} ${pokemon.name}`}
      </h1>
      <br/>
      <img src={`${pokemon.img}`} />
      </div>
    )
}

export default IdNameImg