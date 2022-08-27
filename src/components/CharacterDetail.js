import { useParams, Link } from 'react-router-dom';
import callToApi from '../services/api';


const  CharacterDetail = ( { characterFound } ) => {
  
  const { characterId } = useParams();
 
  const character = !characterFound
    ?callToApi().then(response => response[characterId])
    :characterFound;

  const actorNameUrl = character.actor.replace(/ /g, "_")

  return <>
    <Link 
    to='/'
    >Volver</Link>
        
    <div className="character__detail">
        <section className='character__detail__card'>
            <img className='character__detail__card__image' src={character.image} alt={`Imagen de ${character.name}`}  title={`Imagen de ${character.name}`}/>
            <h3 className='character__detail__card__name'>{character.name}</h3>
            <p className='character__detail__card__actor'>{character.alive}</p>
            <p className='character__detail__card__actor'>{character.actor}</p>
            <a href={`https://es.wikipedia.org/wiki/${actorNameUrl}`}  target="_blank" rel="noopener noreferrer">Más información sobre {character.actor} </a>
            <p className='character__detail__card__specie'>{character.species}</p>
            <p className='character__detail__card__gender'>{character.gender}</p>
            <p className='character__detail__card__house'>{character.house}</p>
        
        </section>
     </div>
  </>
};


// CharacterDetail.defaultProps = {
//   characterFound: {
//     actor: "Daniel Radcliffe",
//     alive: true,
//     gender: "male",
//     house: "Gryffindor",
//     id: "4c7e4d-0e56-1d8d-e077-f6ec01e565",
//     image: "http://hp-api.herokuapp.com/images/harry.jpg",
//     name: "Harry Potter",
//     species: "human"
//   },
// };

export default CharacterDetail;