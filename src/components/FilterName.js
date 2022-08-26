
const  FilterName = (props) => {

  const { filterValues, handleInput } = props;

  const handleInputName = (ev) => {
    handleInput(ev.target.name, ev.target.value)
  }

  return <div className='main__filter--name filter'>
    <label className='main__filter__label--name label' htmlFor='name'>Buscar personajes por nombre:</label>
    <input
    type='text'
    name='name'
    id='name'
    value={filterValues.name}
    onChange={handleInputName}
    />
  </div>
};


export default FilterName; 