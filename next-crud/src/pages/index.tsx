import { useEffect, useState } from "react";
import ClienteRepositorio from "../backend/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const repo: ClienteRepositorio = new ColecaoCliente();

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        <>
          {visivel === "tabela" ? (
            <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={novoCliente}>
                  Novo Cliente
                </Botao>
              </div>
              <Tabela
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
                clintes={clientes}
              />
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={() => setVisivel("tabela")}
            />
          )}
        </>
      </Layout>
    </div>
  );
}
