const empleados = [
  { id: 1, nombre: "Pablo" },
  { id: 2, nombre: "Karem" },
  { id: 3, nombre: "Vicky" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    return empleado ? resolve(empleado) : reject("Error no existe el empleado");
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = salarios.find((e) => e.id === id)?.salario;
    return empleado
      ? resolve(empleado)
      : reject("Error no existe el salario para tal empleado");
  });
};

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado es ${empleado} y su salario es ${salario}`;
  } catch (error) {
    throw error;
  }
};

const ID = 3;

getInfoUsuario(ID)
  .then((empleado) => console.log(empleado))
  .catch((error) => console.log(error));
