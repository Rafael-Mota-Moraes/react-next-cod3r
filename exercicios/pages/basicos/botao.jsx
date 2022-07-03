function acao1() {
  console.log("acao1");
}

export default function botao() {
  function acao2() {
    console.log("acao2");
  }

  function acao4(e) {
    console.log(e.target);
  }

  return (
    <div>
      <button onClick={acao1}>Click</button>
      <button onClick={acao2}>Click 2</button>
      <button onClick={() => console.log("acao3")}>Click 3</button>
      <button onClick={acao4}>Click 4</button>
    </div>
  );
}
