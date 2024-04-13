import PropTypes from "prop-types";

export const fetchdata = async (endPoint) => {
    
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`
    );
    const data = await response.json();
    console.log(data);
    return {
      data,
      isLoading: false,
    };
  } catch (error) {
    console.log(`Hubo este error: ${error}`);
  }
};

fetchdata.propTypes = { endPoint: PropTypes.string };