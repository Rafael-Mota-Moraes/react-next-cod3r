import { useRouter } from "next/router";

export default function Params() {
  const router = useRouter();

  const { nome, id } = router.query;

  return (
    <div>
      <h1>Rotas Params</h1>
      <h2>
        Nome: {nome}, Id: {id}
      </h2>
    </div>
  );
}
