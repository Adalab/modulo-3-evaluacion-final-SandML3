import '../../styles/FormComponents/GenericSelect.scss'; 


const  GenericSelect = (props) => {

  const { updateFilterValues } = props;


  const renderOptions= props.options.map((option, index) => <option key={index} value={props.values[index]}>{option}</option>)

  const handleInputHouse = (ev) => {
      updateFilterValues(ev.target.name, ev.target.value)
  }

  return <div className={`main__filter--${props.name} filter`}>

    <label className={`main__filter__label--${props.name} label`} htmlFor={props.name}>{props.labelText}</label>

    <select
    className={`main__filter__input--${props.name} input`}
    name={props.name}
    id={props.name}
    value={props.value}
    onChange={handleInputHouse}
    >

      {renderOptions}

    </select>
  </div> 
};


export default GenericSelect;