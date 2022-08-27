
import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';

const CharacterList = (props) => {

  const {characterData, filterValues} = props 

  const character = filterValues.sort === true
    ?[...characterData].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    :characterData;


  const renderCharacters = character
  .filter(item => 
    filterValues.gender === 'all'
      ?true
      :item.gender ===filterValues.gender)
      
    .filter(character => character.name.toLowerCase().includes(filterValues.name.toLowerCase()))

    .filter(character => 
      filterValues.house.toLowerCase() === 'all'
        ?true
        :character.house.toLowerCase().includes(filterValues.house.toLowerCase()))

    .map((character) => <li key={character.id} className='main__character__list__item'>
        <CharacterCard character={character} />
    </li> );


  const isEmptyRender = renderCharacters.length !== 0
        ?renderCharacters
        :<CharacterNotFound filterValues={filterValues}/>


  return <section className='main__characters'>
        <h2 className='main__characters__title'>Personajes</h2>
        <ul className='main__characters__list'>
            {isEmptyRender}
        </ul>
    </section> 
};


export default CharacterList;