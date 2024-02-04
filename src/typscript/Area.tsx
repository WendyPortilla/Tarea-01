import React from 'react'

export const Area = () => {
  return (
    <div>
        Area Cuadrado
        <br />
        1.	Crear una función con parámetros que permita calcular el área de un cuadrado.
    </div>
  )
  
}
function calcularAreaCuadrado (base: number, altura: number): number {
    if (base === altura) {
      return base * base;
    } else {
      throw new Error("Error");
      
    }
    
  }
const ladoCuadrado = 8;
const area = calcularAreaCuadrado(ladoCuadrado, ladoCuadrado);

console.log(`El área del cuadrado con lado ${ladoCuadrado} es ${area}`);

