const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Livro, Cliente } = require('../models');

Op


module.exports = {
  index: async (req, res) => {
    try {

      const livros = await Livro.findAll();
      const cliente = await Cliente.findAll();
