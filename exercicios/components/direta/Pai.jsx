import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho familia={props.familia} nome="Pedro" />
      <Filho familia={props.familia} nome="Joana" />
      <Filho {...props} nome="Joana" />
    </div>
  );
}
