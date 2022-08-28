
const  AlphabeticalSort = ({ handleInput,  searchParams, updateFilterValues }) => {
   
    const value = searchParams.get('sort') === 'true'
      ?true
      :false

    const handleInputSort = (ev) => {
      updateFilterValues(ev.target.name, !value)
    };
  
    return <div className='main__filter--sort filter'>

      <label className='main__filter__label--sort label' htmlFor='name'>Ordenar alfabéticamente:</label>

      <input
      type='checkbox'
      name='sort'
      id='sort'
      checked={value}
      onChange={handleInputSort}
      />
      
    </div>
  };
  
  
  export default AlphabeticalSort; 