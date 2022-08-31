
import CharacterCard from '../CharacterList/CharacterCard';
import CharacterNotFound from '../Warnings/CharacterNotFound';
import '../../styles/List/CharacterList.scss';
import Loader from '../Loader'

import PropTypes from 'prop-types';


const CharacterList = ( {characterData, updateFilterValues, searchParams, loading }) => {


  //Alphabetical  order handler.
  const character = searchParams.get('sort') === 'true'
    ?[...characterData].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    :characterData;


  //Characters map and render.
  const renderCharacters = character
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
        :<CharacterNotFound 
        name={searchParams.get('name')}
        />


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


CharacterList.propTypes = {
  characterData: PropTypes.arrayOf(PropTypes.object).isRequired, 
  updateFilterValues: PropTypes.func.isRequired,
  searchParams: PropTypes.objectOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired
}

export default CharacterList;