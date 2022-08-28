import FilterName from './FormComponents/FilterName';
import AlphabeticalSort from './FormComponents/AlphabeticalSort';
import ButtonReset from './FormComponents/ButtonReset';
import GenericSelect from './FormComponents/GenericSelect';
import '../styles/Form.scss'


const  Form = (props) => {
    
  const { updateFilterValues, resetFilterValues, searchParams } = props;


    return <form className='main__filters'>
       
    <FilterName 
    searchParams={searchParams} 
    updateFilterValues={updateFilterValues}
    />

    <GenericSelect 
    name='house' 
    options={['Todas','Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']} values={['all','gryffindor', 'ravenclaw', 'hufflepuff', 'slytherin']} 
    labelText='Selecciona la casa:'
    value={searchParams.get('house')} 
    updateFilterValues={updateFilterValues}
    />


    <AlphabeticalSort 
    updateFilterValues={updateFilterValues}
    searchParams={searchParams}
    />

    <GenericSelect 
    name='gender' 
    options={['Todos','Femenino', 'Masculino']} 
    values={['all','female', 'male']} 
    labelText='Seleccionar por género:' 
    searchParams={searchParams}
    updateFilterValues={updateFilterValues}
    />

    <ButtonReset resetFilterValues={resetFilterValues}/>

  </form>
};


export default Form;