
import PropTypes from "prop-types";
import { useFetchData } from "./hooks/useFetchData";

export const UserList = ({ endPoint }) => {

const {data,isLoading} = useFetchData(endPoint);
  return (
    <>
      <ul>
        { isLoading 
          ? <p>Carregando...</p> 
          : endPoint == "users"
          ? data.map((item, index) => <li key={index}>{item.name}</li>)
              : data.map((item, index) => <li key={index}>{item.body}</li>)
        }
      </ul>
    </>
  );
};

UserList.propTypes = { endPoint: PropTypes.string };
