import { Categoria } from "./categoria/categoria";
import { Patrimonio } from "./patrimonio/patrimonio";
import { Estado } from "./tipos/estado";
const categoria = new Categoria(1, "Diego");
const patrimonio = new Patrimonio(
  1,
  [],
  [categoria],
  [],
  "Fabricio",
  "2023-05-24",
  new Date("2023-04-25"),
  500,
  100,
  Estado.ATIVO,
  ""
);

console.log(patrimonio.categoriaID);
