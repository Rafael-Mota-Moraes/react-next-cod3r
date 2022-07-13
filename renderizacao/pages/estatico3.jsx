export function getStaticProps() {
  return {
    revalidate: 7,
    props: {
      numero: Math.random(),
    },
  };
}

export default function estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
