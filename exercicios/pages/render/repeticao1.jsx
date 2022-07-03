export default function repeticao1() {
  const listaAprovados = [
    "João",
    "Maria",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Laura"
  ];

  function renderizarLista() {
    return listaAprovados.map((elemento, index) => (
      <li key={index}>{elemento}</li>
    ));
  }

  // function renderizarLista() {
  //   const itens = [];

  //   for (let i = 0; i < listaAprovados.length; i++) {
  //     itens.push(<li key={i}>{listaAprovados[i]}</li>);
  //   }

  //   return itens;
  // }

  return <ul>{renderizarLista()}</ul>;
}
