import dados from "../models/dados.js";
const { barbies } = dados;

const getAll = (req, res) => {
  res.status(200).json({
    total: barbies.length,
    data: barbies,
  });
};

export { getAll };
