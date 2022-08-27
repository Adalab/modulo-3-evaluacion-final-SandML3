import FilterName from './FormComponents/FilterName';
import FilterHouse from './FormComponents/FilterHouse';
import AlphabeticalSort from './FormComponents/AlphabeticalSort';
import ButtonReset from './FormComponents/ButtonReset';

const  Form = (props) => {
    
  const { filterValues, updateFilterValues, resetFilterValues } = props;

  const handleInput = (key, value) => {
    updateFilterValues(key, value)
  }

    return <form className='main__filters'>
       
    <FilterName filterValues={filterValues} handleInput={handleInput} />

    <FilterHouse filterValues={filterValues} handleInput={handleInput}/>

    <AlphabeticalSort filterValues={filterValues} handleInput={handleInput}/>

    <ButtonReset resetFilterValues={resetFilterValues}/>

  </form>
};


export default Form;