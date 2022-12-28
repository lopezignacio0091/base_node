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

 

// CUANDO SE MANEJA VARIAS PROMESAS UNA FORMA DE LLAMAR UNA DENTRO DE OTRA OSEA , ES CON EL SIGUIENTE EJEMPLo
// *  EL PRIMER THEN SI O SI RETORNAR LA SIGUIENTE PROMESA 

const ID = 2;
let nombre;
getEmpleado(ID)
  .then((res) => {
    nombre = res;
    return getSalario(ID);
  })
  .then((salario) =>
    console.log("El nombre es:", nombre, "y su salario:", salario)
  )
  .catch((err) => console.log(err));
