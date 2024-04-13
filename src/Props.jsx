import "./Props.css";
import PropTypes from 'prop-types'

export const Props = ({ titulo , subtitulo , soma }) => {
  console.log(titulo);
  console.log(subtitulo);
  console.log(typeof soma);

  return(
    <>
        <h1 className="props">{titulo}</h1>
        <h3 className="props">{subtitulo}</h3>
        <h3 className="props">{soma + 1}</h3>
    
    </>
  );
};

Props.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  soma: PropTypes.number.isRequired
}

Props.defaultProps = {
  titulo:'titulo',
  subtitulo:'subtitulo',
  soma:0
}






