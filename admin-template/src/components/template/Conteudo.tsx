interface ConteudoProps {
  children?: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
        dark:text-gray-200
        flex flex-col mt-7
      `}
    >
      {props.children}
    </div>
  );
}
