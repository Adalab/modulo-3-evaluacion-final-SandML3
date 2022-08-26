
const  FilterName = (props) => {

  const handleInputName = (ev) => {
    
  }

  return <div className='main__filter--name filter'>
    <label className='main__filter__label--name label' htmlFor='name'>Buscar personajes por nombre:</label>
    <input
    type='text'
    name='name'
    id='name'
    // value={}
    onChange={handleInputName}
    />
  </div>
};


export default FilterName;