import { useEffect, useState } from "react";
import axios from "axios";
import ListOfInfo from "./ListOfInfo";

function IdNameImg({ newSearchTerm }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (newSearchTerm) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${newSearchTerm}`)
        .then((response) => {
          setPokemon(response.data);
        })
        .catch((err) => {
          if (err) {
            alert("Pokemon not found");
          }
        });
    }
  }, [newSearchTerm]);

  return (
    <div>
      {pokemon ? (
        <>
          <h1 id="pokemon_id">{`Pokemon Name: #${pokemon.id} ${
            pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
          }`}</h1>
          <br />
          <img
            className="pokemonimg"
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} sprite`}
          />
          <ListOfInfo pokemon={pokemon} />
        </>
      ) : (
        <>
          <p>Please enter a pokemon name</p>
          <img
            id="Pokeball"
            src="https://ssb.wiki.gallery/images/7/7b/Pok%C3%A9_Ball_Origin.png"
            alt="Pokeball"
          />
        </>
      )}
    </div>
  );
}

export default IdNameImg;
