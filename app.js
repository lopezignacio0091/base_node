const { crearArchivo } = require("./Utils/Multiplicar");
const argv = require("./Yargs/Yargs");
console.clear();

// YARGS LIBRERIA QUE CAPTURA COMO OBJETO LO ENVIADO POR LA CONSOLA --BASE 9
const BASE = argv.b;
const LISTAR = argv.l;
const HASTA = argv.h;
crearArchivo({ BASE, LISTAR, HASTA })
  .then((file) => console.log(file, "CREADO!!"))
  .catch((err) => console.log(err));
