
const  FilterHouse = (props) => {

  const { filterValues, handleInput } = props;

  const handleInputHouse = (ev) => {
    handleInput(ev.target.name, ev.target.value)
  }

    return <div className='main__filter--house filter'>
    <label className='main__filter__label--house label' htmlFor='house'>Selecciona la casa:</label>
    <select
    name='house'
    id='house'
    value={filterValues.house}
    onChange={handleInputHouse}
    >
      <option value='all'>Todas</option>
      <option value='gryffindor'>Gryffindor</option>
      <option value='ravenclaw'>Ravenclaw</option>
      <option value='hufflepuff'>Hufflepuff</option>
      <option value='slytherin'>Slytherin</option>
    </select>

  </div> 
};


export default FilterHouse;