

const  FilterName = ({ updateFilterValues, searchParams }) => {


  const handleInputName = (ev) => {
    updateFilterValues(ev.target.name, ev.target.value)
  };

  const handleEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
    }
  };

  return <div className='main__filter--name filter'>

    <label className='main__filter__label--name label' htmlFor='name'>Buscar personajes por nombre:</label>

    <input
    className='main__filter__input--name input'
    placeholder='Ej: Sirius Black'
    type='text'
    name='name'
    id='name'
    value={searchParams.get('name')}
    onChange={handleInputName}
    onKeyPress={handleEnter}
    />
  </div>
};


export default FilterName; 