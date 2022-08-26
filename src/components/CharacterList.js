import CharacterCard from './CharacterCard';

const  CharacterList = (props) => {

    const {characterData} = props;

    const renderCharacters = characterData.map((character, index) => <CharacterCard name={character.name} key={character.id} image={character.image} species={character.species} />)

    return <section className='main__characters'>
        <h2 className='main__characters__title'>Personajes</h2>
        <ul className='main__characters__list'>
            {renderCharacters}
        </ul>
    </section> 
};


export default CharacterList;