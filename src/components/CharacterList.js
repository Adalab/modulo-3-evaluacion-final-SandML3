import CharacterCard from './CharacterCard';

const CharacterList = (props) => {

    const {characterData, filterValues} = props;

    const renderCharacters = characterData
    .filter(character => character.name.toLowerCase().includes(filterValues.name.toLowerCase()))

    .filter(character => character.house.toLowerCase().includes(filterValues.house.toLowerCase()))

    .map((character) => <CharacterCard name={character.name} key={character.id} image={character.image} species={character.species} />)

    return <section className='main__characters'>
        <h2 className='main__characters__title'>Personajes</h2>
        <ul className='main__characters__list'>
            {renderCharacters}
        </ul>
    </section> 
};


export default CharacterList;