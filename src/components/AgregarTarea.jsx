import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {

  const [InputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(InputValue);
  };
  
  const onSubmit = (event)=>{
    event.preventDefault()       
    agregarTarea(InputValue)
  }

  return (
    <form onSubmit={onSubmit }>
      <input
        type="text"
        placeholder="ingressar tarea"
        label="digite"
        value={InputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
