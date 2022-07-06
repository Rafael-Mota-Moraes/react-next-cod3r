import { useState } from "react";

export default function Form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        nome,
        idade
      })
    });

    setNome("");
    setIdade(0);

    const resposta = await fetch("/api/form");
    const users = await resposta.json();
    setUsuarios(users);
  }

  return (
    <div>
      <h1>Integrando com API</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(+e.target.value)}
      />
      <button onClick={salvarUsuario}>Enviar</button>

      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} - {usuario.idade} anos.
          </li>
        ))}
      </ul>
    </div>
  );
}
