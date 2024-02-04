import React from "react";

export const Calificaciones = () => {
  return (
    <div>
      Calificaciones
      <br />
      4. Crear un arreglo con objetos "alumno" y sus propiedades son nombre,
      edad y calificaciones. Luego, escribir una función que calcule el promedio
      de las calificaciones.
    </div>
  );
};
function calcularPromedio(alumnos: Alumno[]): number {
  let suma = 0;
  for (const alumno of alumnos) {
    suma += alumno.calificacion;
  }
  return suma;
}

interface Alumno {
  nombre: string;
  edad: number;
  calificacion: number;
}
const alumnos = [
  {
    nombre: "Viviana",
    edad: 19,
    calificacion: 10,
  },
  {
    nombre: "Wendy",
    edad: 20,
    calificacion: 8,
  },
  {
    nombre: "Gerson",
    edad: 18,
    calificacion: 9,
  },
];


const promedio = calcularPromedio(alumnos);
console.log(`El promedio es: ${promedio}`);
