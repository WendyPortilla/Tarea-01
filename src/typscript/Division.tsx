import React from 'react'

export const Division = () => {
  return (
    <div>Division 
        <br />
        3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
    </div>
  )
}
function dividir(numeros: number[]): number[] {
    const nuevoArreglo = [];
    for (const numero of numeros) {
      nuevoArreglo.push(numero / 5);
    }
    return nuevoArreglo;
  }
  const arreglo = [5,10,15,20,25,30,35,40,45,50]
  const nuevoArreglo = dividir (arreglo);
  console.log(`La division es: ${nuevoArreglo}`); 
  
    
