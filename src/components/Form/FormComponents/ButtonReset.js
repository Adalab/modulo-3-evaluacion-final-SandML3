import '../../../styles/Form/FormComponents/ButtonReset.scss';
import PropTypes from 'prop-types';


const ButtonReset = (props) => {
  
  const handleClick = (ev) => {
    ev.preventDefault();
    props.resetFilterValues();
  };

  return <button type='button' onClick={handleClick} className='button--reset button' >
      Limpiar formulario
    </button>

};


ButtonReset.propType = {
  resetFilterValues: PropTypes.func.isRequired,
}

export default ButtonReset;