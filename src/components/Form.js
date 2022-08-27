import FilterName from './FormComponents/FilterName';
import AlphabeticalSort from './FormComponents/AlphabeticalSort';
import ButtonReset from './FormComponents/ButtonReset';
import GenericSelect from './FormComponents/GenericSelect';

const  Form = (props) => {
    
  const { filterValues, updateFilterValues, resetFilterValues } = props;

  const handleInput = (key, value) => {
    updateFilterValues(key, value)
  }

    return <form className='main__filters'>
       
    <FilterName filterValues={filterValues} handleInput={handleInput} />

    <GenericSelect name='house' options={['Todas','Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']} values={['all','gryffindor', 'ravenclaw', 'hufflepuff', 'slytherin']} filterValues={filterValues} handleInput={handleInput} labelText='Selecciona la casa:'/>


    <AlphabeticalSort filterValues={filterValues} handleInput={handleInput}/>

    <GenericSelect name='gender' options={['Todos','Femenino', 'Masculino']} values={['all','female', 'male']} filterValues={filterValues} handleInput={handleInput} labelText='Seleccionar por género:'/>


    <ButtonReset resetFilterValues={resetFilterValues}/>

  </form>
};


export default Form;