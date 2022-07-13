export async function getServerSideProps() {
  console.log("[Server] gerando props para o componente...");

  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: { produtos },
  };
}

export default function dinamico(props) {
  function renderizarProdutos() {
    return props.produtos.map((produto) => (
      <li key={produto.id}>
        {produto.id}) {produto.nome} - R${produto.preco.toFixed(2)}
      </li>
    ));
  }

  return (
    <div>
      <h1>Dinâmico #02</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
