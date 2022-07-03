import Filho from "./Filho";

export default function Pai(props) {
  function falarComigo(frase) {
    console.log(frase);
  }

  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  );
}
