import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clintes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exbirAcoes = props.clienteExcluido || props.clienteSelecionado;

  const renderizarCabecalho = () => (
    <tr>
      <th className="text-left p-4">Código</th>
      <th className="text-left p-4">Nome</th>
      <th className="text-left p-4">Idade</th>
      {exbirAcoes ? <th className="p-4">Ações</th> : false}
    </tr>
  );

  function renderizarDados() {
    return props.clintes?.map((cliente, index) => (
      <tr
        key={cliente.id}
        className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
      >
        <td className="text-left p-4">{cliente.id}</td>
        <td className="text-left p-4">{cliente.nome}</td>
        <td className="text-left p-4">{cliente.idade}</td>
        {exbirAcoes ? renderizarAcoes(cliente) : false}
      </tr>
    ));
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex gap-2 justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`
            flex justify-center items-center
            text-green-600 rounded-full hover:bg-purple-300 p-2
          `}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`
            flex justify-center items-center
            text-red-500 rounded-full hover:bg-purple-300 p-2
          `}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
          text-gray-100
          bg-gradient-to-r from-purple-500 to-purple-800
        `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
