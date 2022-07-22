import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;

  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="flex flex-col gap-3">
      {id ? <Entrada texto="Nome: " valor={id} somenteLeitura={true} /> : false}
      <Entrada texto="Nome: " valor={nome} valorMudou={setNome} />
      <Entrada
        texto="Idade: "
        valor={idade}
        tipo="number"
        valorMudou={setIdade}
      />
      <div className="flex justify-end gap-2">
        <Botao
          cor="blue"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
