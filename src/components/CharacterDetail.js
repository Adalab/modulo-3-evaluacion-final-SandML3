import { Link } from 'react-router-dom';
import dictionary from '../data/translateDictionary.json'



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
  
  return <>
      <Link to='/'>Volver</Link>
          
      <div className="character__detail">
          <section className='character__detail__card'>
              <img className='character__detail__card__image' src={translatedCharacter.image} alt={`Imagen de ${translatedCharacter.name}`}  title={`Imagen de ${translatedCharacter.name}`}/>
              <h3 className='character__detail__card__name'>{translatedCharacter.name}</h3>

              <p className='character__detail__card__actor'>{translatedCharacter.alive}</p>

              <p className='character__detail__card__actor'>{translatedCharacter.actor}</p>
              <a href={`https://es.wikipedia.org/wiki/${actorNameUrl}`}  target="_blank" rel="noopener noreferrer">Más información sobre {translatedCharacter.actor} </a>
              <p className='character__detail__card__specie'>{translatedCharacter.species}</p>
              <p className='character__detail__card__gender'>{translatedCharacter.gender}</p>
              <p className='character__detail__card__house'>{translatedCharacter.house}</p>
          
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