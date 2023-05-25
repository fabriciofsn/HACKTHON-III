"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_1 = require("./categoria/categoria");
const patrimonio_1 = require("./patrimonio/patrimonio");
const estado_1 = require("./tipos/estado");
const categoria = new categoria_1.Categoria(1, "Diego");
const patrimonio = new patrimonio_1.Patrimonio(1, [], [categoria], [], "Fabricio", "2023-05-24", new Date("2023-04-25"), 500, 100, estado_1.Estado.ATIVO, "");
console.log(patrimonio.categoriaID);
