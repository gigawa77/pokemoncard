function ShinyButton({ setShiny, shiny }) {
  return (
    <button onClick={() => setShiny(!shiny)}>
      {shiny ? "Show Shiny" : "Hide Shiny"}
    </button>
  );
}

export default ShinyButton;
