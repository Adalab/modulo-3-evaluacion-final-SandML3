import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const  Form = (props) => {
    
  const { characterData, filterValues, updateFilterValues } = props;

  const handleInput = (key, value) => {
    updateFilterValues(key, value)
  }

    return <form className='main__filters'>
       
    <FilterName filterValues={filterValues} handleInput={handleInput} />

    <FilterHouse filterValues={filterValues} handleInput={handleInput}/>

  </form>
};


export default Form;