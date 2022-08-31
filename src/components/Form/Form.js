import FilterName from './FormComponents/FilterName';
import AlphabeticalSort from './FormComponents/AlphabeticalSort';
import ButtonReset from './FormComponents/ButtonReset';
import GenericSelect from './FormComponents/GenericSelect';
import '../../styles/Form/Form.scss';

import PropTypes from 'prop-types';
import FilterSpecies from './FormComponents/FilterSpecies';



const  Form = ({ updateFilterValues, resetFilterValues, searchParams, characterData }) => {
    
  const  getAllSpecies = [...new Set (characterData.map(item => item.species))];
  
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

    <FilterSpecies 
    updateFilterValues={updateFilterValues}
    searchParams={searchParams}
    species={getAllSpecies}
    />

    <ButtonReset resetFilterValues={resetFilterValues}/>

  </form>
};

Form.propTypes = {
  characterData: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateFilterValues: PropTypes.func.isRequired, 
  resetFilterValues: PropTypes.func.isRequired, 
  searchParams: PropTypes.objectOf(PropTypes.string).isRequired
}


export default Form;