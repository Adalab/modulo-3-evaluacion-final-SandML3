import { Link } from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';


const  CharacterDetail = (props) => {

    const { pathname } = useLocation();
  // console.log(pathname)

  const dataPath = matchPath('character/:characterId', pathname)

  const characterId = dataPath !== null
    ?dataPath.params.characterId
    :null;

  const reloadCharacterFound = props.characterData.find(character => character.id === characterId);

  console.log(props.characterData)
  
  const character = props.characterFound
        ?props.characterFound
        :reloadCharacterFound;

    return <>
        <Link 
        to='/'
        >Volver</Link>
        
        <div className="character__detail">
            <section className='character__detail__card'>
                <img className='character__detail__card__image' src={props.characterFound.image} alt={`Imagen de ${character.name}`}  title={`Imagen de ${character.name}`}/>
                <h3 className='character__detail__card__name'>{character.name}</h3>
                <p className='character__detail__card__actor'>{character.alive}</p>
                <p className='character__detail__card__actor'>{character.actor}</p>
                <p className='character__detail__card__specie'>{character.species}</p>
                <p className='character__detail__card__gender'>{character.gender}</p>
                <p className='character__detail__card__house'>{character.house}</p>
        
            </section>
        </div>
    </>
};


export default CharacterDetail;