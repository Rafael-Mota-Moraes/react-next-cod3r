export default function Estilo(props) {
  const classeAplicada = props.numero >= 0 ? "azul" : "vermelho";

  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
          color: props.color,
          padding: "1rem",
          textAlign: props.direita && "right"
        }}
      >
        Texto #02
      </h1>
      <h2 className={classeAplicada}>Texto #02</h2>
    </div>
  );
}
