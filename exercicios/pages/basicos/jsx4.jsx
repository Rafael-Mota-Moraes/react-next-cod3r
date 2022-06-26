export default function jsx4() {
  const subtitulo = "Estou no javascript";

  const containerStyles = {
    background: "#DDD",
    display: "inline-block",
    margin: "2rem",
    borderRadius: ".25rem",
    padding: ".75rem",
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div style={containerStyles}>
      <h1>Integração JSX & JSX</h1>
      <h2>{subtitulo}</h2>
      <hr />
      <h3>{3 * 3}</h3>
      <h3>Maior: {Math.max(...numbers)}</h3>
      <h4>{entre(5, 1, 10)}</h4>
    </div>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "sim";
  } else {
    return "não";
  }
}
