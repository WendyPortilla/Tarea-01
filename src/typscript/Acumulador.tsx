import React, { useState } from 'react'; 
 
 export const Acumulador = () => { 
  const [acumulador, setAcumulador] = useState<number>(5); 
 
  const sumarCinco = () => { 
    setAcumulador((Acumulador) => Acumulador + 5); 
  }; 
 
  const restarCinco = () => { 
    setAcumulador((Acumulador) => Acumulador - 5); 
  }; 
 
  return ( 
    <div> 
      <h3>Acumulador</h3> 
      <p>Acumulacion: {acumulador}</p> 
        <button onClick={restarCinco}>-5</button> 
        <button onClick={sumarCinco}>+5</button> 
       
    </div> 
  ); 
}; 
 
