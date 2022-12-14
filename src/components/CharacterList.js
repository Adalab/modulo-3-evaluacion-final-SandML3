
import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';
import '../styles/CharacterList.scss';
import Loader from './Loader'



const CharacterList = ( {characterData, updateFilterValues, searchParams, loading }) => {


  //Alphabetical  order handler.
  const character = searchParams.get('sort') === 'true'
    ?[...characterData].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    :characterData;


  //Characters map and render.
  const renderCharacters = character
    .filter(item => item.alive.toString() === searchParams.get('state'))
    .filter(item => 
      searchParams.get('gender') === 'all'
        ?true
        :item.gender === searchParams.get('gender'))
      
    .filter(character => character.name.toLowerCase().includes(searchParams.get('name').toLowerCase()))

    .filter(character => 
      searchParams.get('house').toLowerCase() === 'all'
        ?true
        :character.house.toLowerCase().includes(searchParams.get('house').toLowerCase()))

    .map((character) => <li key={character.id} className='main__characters__list__item'>
        <CharacterCard character={character} 
        updateFilterValues={updateFilterValues}
        />
    </li> );

  
  //Empty list warning.
  const isEmptyRender = renderCharacters.length !== 0
        ?renderCharacters
        :<CharacterNotFound searchParams={searchParams}/>


  const renderCharacterList = loading
    ?<Loader></Loader>
    :<ul className='main__characters__list'>
      {isEmptyRender}
    </ul>

  return <section className='main__characters'>
        <h2 className='main__characters__title'>Personajes</h2>
        {renderCharacterList}
    </section> 
};


export default CharacterList;