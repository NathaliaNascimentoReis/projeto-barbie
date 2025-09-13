import dados from "../models/dados.js";
const { barbies } = dados;

const getAll = (req, res) => {
  res.status(200).json({
    total: barbies.length,
    data: barbies,
  });
};

let getById = (req, res) => {
  const id = parseInt(req.params.id);
  const barbie = barbies.find((b) => b.id === id);

  if (barbie) {
    res.status(200).json(barbie);
  } else {
    res.status(404).json({
      mensagem: "Essa profissão da Barbie não existe",
    });
  }
};

let createBarbie = (req, res) => {
  const { nome, profissao, anoLancamento } = req.body;

  if (!nome || !profissao) {
    return res.status(400).json({
      sucess: false,
      message: "Nome e profissão são campos obrigatórios!",
    });
  }

  const newBarbie = {
    id: barbies.length++,
    nome: nome,
    profissao: profissao,
    anoLancamento: anoLancamento,
  };

  barbies.push(newBarbie);

  res.status(200).json({
    sucess: true,
    message: "Barbie criada com sucesso!",
    data: newBarbie,
  });
};

let deletarBarbie = (req, res) => {
  let id = parseInt(req.params.id);

  const barbieParaDeletar = barbies.find((b) => b.id === id);

  if (!barbieParaDeletar) {
    return res.status(404).json({
      sucess: false,
      message: `Esse ID da barbie não existe: ${id}`,
    });
  }

  const barbiesFiltradas = barbies.filter((barbie) => barbie.id !== id);

  barbies.splice(0, barbies.length, ...barbiesFiltradas);

  res.status(200).json({
    sucess: true,
    message: "Barbie deletada com sucesso!",
    barbieDeletada: barbieParaDeletar,
  });
};

export { getAll, getById, createBarbie, deletarBarbie };
