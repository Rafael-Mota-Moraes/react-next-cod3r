import styles from "../styles/Cartao.module.css";

interface Props {
  bgColor?: string;
  children?: JSX.Element;
}

export default function Cartao(props: Props) {
  return (
    <div
      className={styles.cartao}
      style={{
        backgroundColor: props.bgColor ?? "#fff"
      }}
    >
      {props.children}
    </div>
  );
}
