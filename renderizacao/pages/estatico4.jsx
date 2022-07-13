export async function getStaticProps() {
  console.log("[Server] gerando props para o componente...");

  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: { produtos },
  };
}

export default function estatico4(props) {
  function renderizarProdutos() {
    return props.produtos.map((produto) => (
      <li key={produto.id}>
        {produto.id}){produto.nome} - R${produto.preco.toFixed(2)}
      </li>
    ));
  }

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
