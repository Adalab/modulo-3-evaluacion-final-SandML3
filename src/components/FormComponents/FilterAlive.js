const FilterAlive = ({updateFilterValues, searchParams }) => {
 
 
    const handleChange = (ev) => {
        updateFilterValues(ev.target.name, ev.target.value)
      };
 
 return <fieldset>

    <legend>Filtrar por estado:</legend>
    
    <div>
        <input
        type='radio'
        name='state'
        id='alive'
        value={true}
        onChange={handleChange}
        checked={searchParams.get('state') === 'true'}
        />
        <label  htmlFor='alive'> Vivo </label>
    </div>

    <div>
        <input
        type='radio'
        name='state'
        id='dead'
        value={false}
        onChange={handleChange}
        checked={searchParams.get('state') === 'false'}
        />
        <label htmlFor='dead'> Muerto </label>
    </div> 

  </fieldset>
};
export default FilterAlive;