// criado com comando rafc
//está exportando uma variável função

/*
sintaxe para exportar variável função
export let ou const Nome = ()=>{}
função seta com return
dentro do return, colocar <> , equivale a uma div
especificar os elementos html 
*/

/*

variáveis devem ser declaradas fora das funções

*/

const string = "Isso é um texto";
const number = 123456;
const array = ["curso react", "youtube", 4, 10000];
const boolean = true;
const funcion = () => " retorno função seta ";

function myFunction() {
  return " retorna string desde função tradicional";
}

/*

para renderizar objetos é necessário
Json.stringfy(objeto)
datas também são objetos
converte para uma espécie de string
json.string

*/
const fecha = new Date();
const objeto = { nombre: "curso de javascript", duracion: 4 };

export const SegundoComponente = () => {
  return (
    // código jsx
    <>
      <p>{1 + 1}</p>
      <p>Variável string, value: {string}</p>
      <p>Variável number, value: {number}</p>
      <p>Variável array, value: {array}</p>
      <p>Variável boolean, value: {boolean}</p>
      <br />
      <p>{funcion()}</p>
      <br />
      <p>{myFunction()}</p>
      <br />
      <p>objeto precisa JSON.stringfy: {JSON.stringify(objeto)}</p>

      <br />
      <p>
        datas também são objetos, precisa JSON.stringfy:{JSON.stringify(fecha)}
      </p>
    </>
  );
};
