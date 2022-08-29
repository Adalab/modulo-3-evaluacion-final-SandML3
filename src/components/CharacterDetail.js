import dictionary from '../data/translateDictionary.json'
import '../styles/CardDetail.scss';
import { LinkWithQuery } from './LinkWithQuery';



const  CharacterDetail = ( { characterFound } ) => {

  const actorNameUrl = characterFound.actor.replace(/ /g, "_")

  const translatedCharacter = {
    image: characterFound.image,
    name: characterFound.name,
    actor: characterFound.actor,
    house: characterFound.house,
    gender: dictionary.gender[characterFound.gender],
    species: characterFound.species === 'human'
      ?dictionary.species[characterFound.species][characterFound.gender]
      :dictionary.species[characterFound.species],
    alive: dictionary.alive[characterFound.alive][characterFound.gender]
  }
  
  return <div className='character__detail'>
      <LinkWithQuery to='/' className='character__detail__button--home button link'>Volver</LinkWithQuery>
      
    
        <section className='character__detail__card'>
            <div className='character__detail__card__house_image' style={{backgroundImage: `url('../images/${characterFound.house.toLowerCase()}.jpg')`}}></div>

            <img className='character__detail__card__image' src={translatedCharacter.image} alt={`Imagen de ${translatedCharacter.name}`}  title={`Imagen de ${translatedCharacter.name}`}/>
            <h3 className='character__detail__card__name'>{translatedCharacter.name}</h3>

            <div class="character__detail__card__text">
              <p className='character__detail__card__alive'>{translatedCharacter.alive}</p>
              <p className='character__detail__card__actor'>{translatedCharacter.actor}</p>
              <a href={`https://es.wikipedia.org/wiki/${actorNameUrl}`}  target="_blank" rel="noopener noreferrer" className='character__detail__card__actor--wiki link'>Más información sobre {translatedCharacter.actor}  </a>
              <p className='character__detail__card__specie'>{translatedCharacter.species}</p>
              <p className='character__detail__card__gender'>{translatedCharacter.gender}</p>
              <p className='character__detail__card__house'>{translatedCharacter.house}</p>
            </div>
        
        </section>
     
    </div>
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