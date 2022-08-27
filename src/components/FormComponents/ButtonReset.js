const ButtonReset = (props) => {
  
  const handleClick = (ev) => {
    ev.preventDefault();
    props.resetFilterValues();
  };

  return <button type='button' onClick={handleClick} >
      Resetear formulario
    </button>

};

export default ButtonReset;