import PropTypes from 'prop-types';
import '../../../styles/Form/FilterSpecies.scss';

const  FilterSpecies = ({updateFilterValues, species, searchParams}) => {


  const handleInputSpecie = (ev) => {
    updateFilterValues(ev.target.name, ev.target.id)
  };


  const renderInputs = species.map((item, index) => <div key={index} className='main__filter__option'>
    <input
    type='radio'
    name='species'
    id={item}
    checked={searchParams.get('species') === item}
    onChange={handleInputSpecie}
    />
   
    <label className='main__filter__label--species label' htmlFor='name'>{item.replace(/^\w/, (c) => c.toUpperCase())}</label>
  </div>)


  return <fieldset className='main__filter--species filter'>
    <legend className='main__filter__legend--species label'>Selecciona una especie: </legend>

    <div className='main__filter__option'>
        <input
        type='radio'
        name='species'
        id='all'
        checked={searchParams.get('species') === 'all'}
        onChange={handleInputSpecie}
        />
    
        <label className='main__filter__label--species label' htmlFor='name'>Todas</label>
  </div>

    {renderInputs}

  </fieldset>
};


FilterSpecies.propTypes = {
  type: PropTypes.string,
  updateFilterValues: PropTypes.func.isRequired,
  searchParams: PropTypes.objectOf(PropTypes.string).isRequired
};

export default FilterSpecies; 