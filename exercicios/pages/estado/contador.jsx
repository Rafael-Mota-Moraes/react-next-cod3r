import { useState } from "react";
import NumeroDisplay from "../../components/ContadorDisplay";

export default function contador() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <NumeroDisplay numero={counter} />
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}
