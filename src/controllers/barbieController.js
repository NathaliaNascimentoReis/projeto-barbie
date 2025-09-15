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

let updateBarbie = (req, res) => {
  // toda a lógica para atualizar uma Barbie específica
  const id = parseInt(req.params.id);
  // Body para pegar os novos dados
  const {nome, profissao, anoLancamento} = req.body;

  const idParaEditar = id;

  // Verificar se o ID é válido
  if (isNan(idParaEditar)) {
    return res.status(400).json({
      sucess: false,
      message: "O ID deve ser um númeroo válido!"
    })
  }

// Verificar se a Barbie buscada existe
const barbieExiste = barbies.find(barbie => barbie.id === idParaEditar)

if (!barbieExiste) {
  return res.status(404).json({
    sicess: false,
    message: `Barbie com ID: ${id} não existe.`
  })
}

// Após passar todos os cenários, eu atualizo a Barbie.
// Laço map()

const barbiesAtualizadas = barbies.map(barbie => barbie.id === idParaEditar ? {
  // Parte 1
  ...barbie,
  ...(nome && {nome}),
  ...(profissao && {profissao}),
  ...(anoLancamento && {anoLancamento}),
} : barbie)

  // Atualizado o array com o splice
  const barbieNova = barbies.find(barbie => barbie.id === idParaEditar);

  res.status(200).json({
    sucess: true,
    message: `Dados da Barbie ID ${idParaEditar} atualizados com sucesso!`,
    barbie: barbieNova
  })
}

export { getAll, getById, createBarbie, deletarBarbie, updateBarbie };
