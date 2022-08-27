const  AlphabeticalSort = (props) => {

    const { filterValues, handleInput } = props;
  
    const handleInputSort = (ev) => {
        handleInput(ev.target.name, !filterValues.sort)
    };
  
    return <div className='main__filter--sort filter'>
      <label className='main__filter__label--sort label' htmlFor='name'>Ordenar alfabéticamente:</label>
      <input
      type='checkbox'
      name='sort'
      id='sort'
      checked={filterValues.sort}
      onChange={handleInputSort}
      />
    </div>
  };
  
  
  export default AlphabeticalSort; 