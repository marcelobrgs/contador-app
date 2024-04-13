import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchdata } from "../../helpers/fetchData";

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);

  const [isLoading, setisLoading] = useState(true);

  let endPoint = `${endpoint}`;

  const getData = async()=>{
    const{data,isLoading} = await fetchdata(endpoint);
    setData(data)
    setisLoading(isLoading)
  }

  useEffect(() => {
    getData()
  }, [endPoint]);

  return {
    data,
    isLoading,
  };
};

useFetchData.propTypes = { endPoint: PropTypes.string };
