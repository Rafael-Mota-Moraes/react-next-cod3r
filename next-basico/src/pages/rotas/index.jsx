import Link from "next/link";
import { useRouter } from "next/router";

export default function Rotas() {
  const router = useRouter();

  function navegacao(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "Rafael"
      }
    });
  }

  return (
    <div>
      <h1>Index Rotas</h1>
      <ul>
        <li>
          <Link href="/rotas/params?id=12&nome=Rafa">Params</Link>
        </li>
        <li>
          <Link href="/rotas/123/buscar">Buscar</Link>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <button onClick={() => navegacao("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoComParams()}>Params</button>
      </div>
    </div>
  );
}
