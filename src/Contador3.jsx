import "./ContadorApp.css";
import { useState } from "react";

// {value } é um destructuring, abaixo, entre parênteses
// o valor inicial de value é definido em main.jsx

export const Contador3 = ({ value }) => {
  
  const [contador, setContador] = useState(value);
  /*
        variável do tipo const, não pode modificar
        nome da variável : contador
        método para poder modificá-lo : setContador
        value é o valor default
*/
  //variável função seta
  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <>
      <h1 id="contador-app">Contador3:</h1>
      <p>{contador}</p>
      <button onClick={handleClick}>Soy un botón</button>
    </>
  );
};
