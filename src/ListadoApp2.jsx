import { useState } from "react";
import "./ContadorApp.css";
import { AgregarTarea } from "./components/AgregarTarea";

/*
uso do operador ternário ?
se visto, retorna um ícone, senão, outro
precisa escrever ícones entre aspas, são caracteres
para inserir caracteres: botão windows + ponto .


duplo && : se é true mostra, se false, não mostra
{visto && '✅'}
duplo e comercial = &&
se é falso sai da condição

situações de renderizar ou não renderizar

operador ternário ?
{visto ? '✅': '⛔' }
se foi visto, ícone verde
se não, ícone vermelho
interrogação ? true : false


*/

const Item = ({ nombre, visto,}) => {
  return (
    <li >
      
      {nombre}
      {visto ? "✅" : "⛔"}
    </li>
  );
};

export const ListadoApp2 = () => {
  let listadoSecciones = [
    { id: 1 , nombre: "Instalações necessarias ", visto: true },
    { id: 2 , nombre: "uso vite ", visto: true },
    { id: 3 , nombre: "componentes ", visto: true },
    { id: 4 , nombre: "jsx ", visto: true },
    { id: 5 , nombre: "props ", visto: true },
    { id: 6 , nombre: "eventos ", visto: true },
    { id: 7 , nombre: "useState ", visto: true },
    { id: 8 , nombre: "hooks ", visto: false },
    { id: 9 , nombre: "custom hooks ", visto: false },
    { id: 10 , nombre: "redux ", visto: false },
  ];

  const [Arreglo, setArreglo] = useState(listadoSecciones);
  //console.log(Arreglo);

  const AddTask = ()=>{
    setArreglo([... Arreglo, {nombre:'nuevo', visto:false}])
  }

  // eventos de escuta onClick, onSubmit, onKeyDown
 
  const onAgregarTarea = (val)=>{
// eliminar espaços em branco no início
    let valor = val.trim() 
    if (valor < 1) {
      alert('digite um valor')
      return
    }
    //console.log(val);

    const envio = {
      id: Arreglo.length +1 ,
      nombre: valor,
      visto:false
    }

    setArreglo([...Arreglo,envio])
    //console.log(val)
    console.log(Arreglo.length)
    counter()
    
  }

  function counter(){
    for (let i = 0; i < Arreglo.length; i++) {
      const element = Arreglo[i].nombre;
      console.log(element)
    }
    //Arreglo.map(x=>console.log(`${x.nombre}`))
  }

  return (
    <>
      <div className="background">
        <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
        <br />
        <br />
      
        {Arreglo.map((x, index) => (
          <Item key={index} nombre={x.nombre} visto={x.visto}></Item>
        ))}
        <br />


        <button onClick={()=>{AddTask()}}>Agregar tarefa</button>
      </div>
      <div className="background">
        <h1>Listado 2 de temas del curso</h1>
        <h3>Realizado ✅ </h3>
        <h3>A realizar⛔ </h3>
        <ol>
          {Arreglo.map((x, index) => (
            <Item key={index} nombre={x.nombre} visto={x.visto}></Item>
          ))}
        </ol>

        <ol>
          {Arreglo.forEach((elemento, index) => (
            <Item
              key={index}
              nombre={elemento.nombre}
              visto={elemento.visto}
            ></Item>
          ))}
        </ol>
      </div>
    </>
  );
};
