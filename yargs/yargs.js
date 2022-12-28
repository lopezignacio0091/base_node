const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    default: false,
    type: "boolean",
    describe: "Muestra y lista la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Variable hasta que numero multiplicar",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) throw "La base tiene que ser un numero";
    return true;
  }).argv;

module.exports = argv;
