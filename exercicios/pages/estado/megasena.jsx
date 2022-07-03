import { useEffect, useRef, useState } from "react";

import mega from "../../functions/mega";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megaSena() {
  const [numeros, setNumeros] = useState([]);
  const [qtde, setQtde] = useState(6);

  useEffect(() => {
    setNumeros(mega());
  }, [mega]);

  function renderNumeros() {
    return numeros.map((n) => <NumeroDisplay numero={n} key={n} />);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Mega Sena</h1>
      <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
        {renderNumeros()}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          placeholder="Quantidade de Numeros"
          min={6}
          max={30}
          value={qtde}
          onChange={(e) => setQtde(e.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtde))}>
          Gerar Novos Numeros
        </button>
      </div>
    </div>
  );
}
