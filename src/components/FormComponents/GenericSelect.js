
const  GenericSelect = (props) => {

  const { filterValues, handleInput } = props;


  const renderOptions= props.options.map((option, index) => <option key={index} value={props.values[index]}>{option}</option>)

  const handleInputHouse = (ev) => {
      handleInput(ev.target.name, ev.target.value)
  }

    return <div className={`main__filter--${props.name} filter`}>
    <label className={`main__filter__label--${props.name} label`} htmlFor={props.name}>{props.labelText}</label>
    <select
    name={props.name}
    id={props.name}
    value={filterValues[props.name]}
    onChange={handleInputHouse}
    >
      {renderOptions}
    </select>

  </div> 
};


export default GenericSelect;