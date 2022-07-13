export default function handler(req, res) {
  const id = req.query.id;

  res.status(200).json({
    id: Number(id),
    nome: `João Almeida ${id}`,
    email: `email${id}@email.com`,
  });
}
