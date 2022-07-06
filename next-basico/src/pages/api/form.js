const usuarios = [];

export default function form(req, res) {
  if (req.method === "POST") {
    return post(req, res);
  } else if (req.method === "GET") {
    return get(req, res);
  }

  return res.status(405).send();
}

function post(req, res) {
  const usuario = JSON.parse(req.body);
  usuarios.push(usuario);
  res.status(200).send();
}

function get(req, res) {
  res.status(200).json(usuarios);
}