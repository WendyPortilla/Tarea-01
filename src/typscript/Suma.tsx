import React from "react";

export const Suma = () => {
  return (
    <div>
      Suma de Elementos
      <br />
      2. Desarrolle una función que reciba un arreglo como parámetro y como
      resultado retorne la suma de los elementos del arreglo.
    </div>
  );
};
function sumarElemento (numeros: number[]): number {
    let suma = 0;
    for (const numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  const numeros = [89, 97, 32, 84];
const sumaT = sumarElemento(numeros);
console.log(`La suma es: ${sumaT}`); 

  
