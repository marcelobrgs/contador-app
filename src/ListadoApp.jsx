import './ContadorApp.css'

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





const Items =({nombre,visto})=>{
    return(
        <li>
            {nombre} 
            {visto ? '✅': '⛔' }
        </li>
    )
}

export const ListadoApp = () => {
  return (
    <>
      <div className="background">
        <h1>Listado de temas del curso</h1>
        <h3>Realizado ✅  </h3>
        <h3>A realizar⛔ </h3>
        <Items nombre='Instalações necessarias' visto={true}></Items>
        <Items nombre='uso vite' visto={true}></Items>
        <Items nombre='componentes' visto={true}></Items>
        <Items nombre='jsx' visto={true}></Items>
        <Items nombre='props' visto={true}></Items>
        <Items nombre='eventos' visto={true}></Items>
        <Items nombre='useState' visto={true}></Items>
        <Items nombre='hooks' visto={false}></Items>
        <Items nombre='custom hooks ' visto={false}></Items>
        <Items nombre='Redux' visto={false}></Items>
        
      </div>
    </>
  );
};
