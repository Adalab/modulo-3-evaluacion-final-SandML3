import '../../styles/FormComponents/ButtonReset.scss';


const ButtonReset = (props) => {
  
  const handleClick = (ev) => {
    ev.preventDefault();
    props.resetFilterValues();
  };

  return <button type='button' onClick={handleClick} className='button--reset button' >
      Limpiar formulario
    </button>

};

export default ButtonReset;