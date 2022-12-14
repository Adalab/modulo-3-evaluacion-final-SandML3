import FilterName from './FormComponents/FilterName';
import AlphabeticalSort from './FormComponents/AlphabeticalSort';
import ButtonReset from './FormComponents/ButtonReset';
import GenericSelect from './FormComponents/GenericSelect';
import FilterAlive from './FormComponents/FilterAlive';
import '../styles/Form.scss'


const  Form = (props) => {
    
  const { updateFilterValues, resetFilterValues, searchParams } = props;


    return <form className='main__filters'>
       
       <AlphabeticalSort 
    updateFilterValues={updateFilterValues}
    searchParams={searchParams}
    />

    <FilterName 
    updateFilterValues={updateFilterValues}
    searchParams={searchParams}
    />

    <GenericSelect 
    name='house' 
    options={['Todas','Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']} values={['all','gryffindor', 'ravenclaw', 'hufflepuff', 'slytherin']} 
    labelText='Selecciona la casa:'
    updateFilterValues={updateFilterValues}
    value={searchParams.get('house')}
    />

    <GenericSelect 
    name='gender' 
    options={['Todos','Femenino', 'Masculino']} 
    values={['all','female', 'male']} 
    labelText='Seleccionar por género:'  
    updateFilterValues={updateFilterValues}
    value={searchParams.get('gender')}
    />

    <FilterAlive 
    updateFilterValues={updateFilterValues} 
    searchParams={searchParams}/>

    <ButtonReset resetFilterValues={resetFilterValues}/>

  </form>
};


export default Form;