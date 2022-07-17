import styles from "../styles/Temporizador.module.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  key: number;
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        size={120}
        isPlaying={true}
        duration={props.duracao}
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 3, 0]}
        onComplete={props.tempoEsgotado}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
