export default function Titulo(props) {
  const { titulo, subtitulo } = props;

  if (props.pequeno) {
    return (
      <>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </>
    );
  }
}
