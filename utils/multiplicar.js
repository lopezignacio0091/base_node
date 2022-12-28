const fs = require("fs");

const multi = ({ BASE, LISTAR, HASTA }) => {
  let salida = "";
  for (let i = 1; i <= HASTA; i++) {
    salida += `${BASE} x ${i} = ${BASE * i}\n`;
  }
  if (LISTAR) console.log(salida);
  return salida;
};

const crearArchivo = async ({ BASE, LISTAR, HASTA }) => {
  try {
    const FILE_NAME = `./salida/tabla-${BASE}.txt`;
    fs.writeFileSync(FILE_NAME, multi({ BASE, LISTAR, HASTA }));
    return FILE_NAME;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo };
