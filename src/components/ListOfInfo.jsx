import Card from "react-bootstrap/Card";

function ListOfInfo(props) {
  const { pokemon } = props;
  console.log(pokemon);

  return (
    <div>
      <Card>
        <h1>
          {`
          Ability: ${
            pokemon.abilities[0].ability.name[0].toUpperCase() +
            pokemon.abilities[0].ability.name.substring(1)
          }
          `}
          <br />
          {`Type: ${
            pokemon.types[0].type.name[0].toUpperCase() +
            pokemon.types[0].type.name.substring(1)
          }`}
          <br />
          {`Height: ${pokemon.height} feet`}
          <br />
          {`Weight: ${pokemon.weight} lbs`}
        </h1>
      </Card>
    </div>
  );
}

export default ListOfInfo;
