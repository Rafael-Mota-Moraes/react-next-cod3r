import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <h1>Usando título</h1>
      <Titulo
        titulo="Página de cadastro"
        subtitulo="Incluir, alterar e excluir coisas"
      />
      <hr />
      <Titulo
        titulo="Página de Login"
        subtitulo="Realize Login no Sistema"
        pequeno
      />
    </div>
  );
}
