import '../../styles/FormComponents/AlphabeticalSort.scss'; 

const  AlphabeticalSort = ({ updateFilterValues, searchParams }) => {
   
    const value = searchParams.get('sort') === 'true'
      ?true
      :false

    const handleInputSort = (ev) => {
      updateFilterValues(ev.target.name, !value)
    };
  
    return <div className='main__filter--sort filter'>

      <label className='main__filter__label--sort label' htmlFor='name'>Ordenar alfabéticamente:</label>

      <input
      className='main__filter__input--sort input'
      type='checkbox'
      name='sort'
      id='sort'
      checked={value}
      onChange={handleInputSort}
      />
      
    </div>
  };
  
  
  export default AlphabeticalSort; 