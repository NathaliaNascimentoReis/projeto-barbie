import express from "express";
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
  const barbie = barbies.find(b => b.id === id)

if (barbie) {
  res.status(200).json(barbie)
} else {
  res.status(404).json({
    mensagem: "Essa profissão da Barbie não existe"
  })
  }
}

export { getAll, getById };
