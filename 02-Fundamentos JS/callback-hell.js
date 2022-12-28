const empleados = [
  { id: 1, nombre: "Pablo" },
  { id: 2, nombre: "Karem" },
  { id: 3, nombre: "Vicky" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
];

const getEmpleado = (id, args) => {
  const empleado = empleados.find((e) => e.id === id);
  return empleado ? args(null, empleado) : args("No existe el empleado");
};

const getSalario = (id, args) => {
  const salario = salarios.find((s) => s.id === id)?.salario;
  return salario
    ? args(null, salario)
    : args("No existe el salario del empleado");
};
// el callback recibe como primer parametro el error , por ende se puede log el error si el mismo existiera ,
// como en este caso si se le pasa un id que no contenga ningun empleado
// getEmpleado(8, (err, empleado) => {
//   if (err) {
//     console.log("ERROR!!");
//     return console.log(err);
//   }
//   console.log("Empleado existe!!");
//   console.log(empleado);
// });

getSalario(10, (err, salario) => {
  if (err) {
    console.log("ERROR!!");
    return console.log(err);
  }
  console.log("Salario existe!!");
  console.log(salario);
});
