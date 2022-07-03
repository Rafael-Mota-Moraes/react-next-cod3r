import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("inicial");

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={(ev) => setValor(ev.target.value)}
      />

      <h3>{valor}</h3>
    </div>
  );
}
