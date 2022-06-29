export default function lista() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function renderizarNumeros() {
    return nums.map((num, index) => <li key={index}>{num}</li>);
  }

  return <div>{renderizarNumeros()}</div>;
}
