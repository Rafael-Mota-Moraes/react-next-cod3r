import { useRouter } from "next/router";

export default function Buscar() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <h1>Rotas / {id} / Buscar</h1>
    </>
  );
}
