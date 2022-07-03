export default function Filho(props) {
  // "Passei no ENEM!"

  return (
    <div>
      <h1>Filho #alterado</h1>
      <button onClick={() => props.funcao("Passei no ENEM!")}>
        Falar com o pai
      </button>
    </div>
  );
}
