import { useState } from "react";

export default function mouse(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const estilo = {
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  function quandoMover(ev) {
    setY(ev.clientY);
    setX(ev.clientX);
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  );
}
