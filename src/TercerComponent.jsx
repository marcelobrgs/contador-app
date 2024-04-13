/*
ISTO ABAIXO É UM FRAGMENT
<> </> 
EQUIVALE A UM DIV
É O ELEMENTO PAI
OS ELEMENTOS FILHOS VÃO ENTRE FRAGMENTS

*/

const string = "Isso é um texto";
const number = 123456;
const array = ["curso react", "youtube", 4, 10000];
const boolean = true;
const funcion = () => " retorno função seta ";

function myFunction() {
  return " retorna string desde função tradicional";
}

const fecha = new Date();
const objeto = { nombre: "curso de javascript", duracion: 4 };


export const TercerComponent = () => {
  return (
    <>
        <h1>Este é o TercerComponent:</h1>
        <ul>
            <li>{string}</li>
            <li>{number}</li>
            <li>{array}</li>
            <li>{boolean}</li>
            <li>{funcion()}</li>
            <li>{myFunction()}</li>
            <li>{JSON.stringify(fecha)}</li>
            <li>{JSON.stringify(objeto)}</li>
            
        </ul>

    
    
    </>
  )
}
