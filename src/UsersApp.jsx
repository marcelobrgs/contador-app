import "./ContadorApp.css";
import { useState } from "react";
import { UserList } from "./components/UserList";

// useEffect executará somente 1 vez no início
// busca os dados uma única vez
// depois pára

/*
    o método map para retornar uma lista de usuários
    poderia utilizar como id ou index, conforme alteração
    mostrada abaixo:
    users.map((user,index)=>
                  <li key={index}>{user.id} {user.name}. Adress: {user.address.street} Company: {user.company.name}</li>)
               }
*/

export const UsersApp = () => {
  
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };

  return (
    <>
      <div className="background">
        <h1>UsersApp</h1>

        <h2>Lista de usuários:</h2>
        <button onClick={handleFetch}>Clique para chamar a api</button>
        <UserList endPoint={endPoint}></UserList>
      </div>
    </>
  );
};
