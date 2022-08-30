import dictionary from '../data/translateDictionary.json'
import '../styles/CardDetail.scss';
import { LinkWithQuery } from './Custom Hook/LinkWithQuery';



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
    alive: dictionary.alive[characterFound.alive][characterFound.gender],
  }

  const isAlive = characterFound.alive
      ?<i className='fa-solid fa-heart-circle-bolt'></i>
      :<i className='fa-solid fa-skull'></i>
  

  const alternativeNames = characterFound.alternativeNames
    ?<p className='character__detail__card__alternate_names'>Nombres alternativos: {characterFound.alternate_names}</p>
    :<p className='character__detail__card__alternate_names'>Este personaje no posee nombres alternativos.</p>

  
  return <div className='character__detail'>

      <LinkWithQuery to='/' className='character__detail__button--home button link'><i class="fa-solid fa-caret-left"></i>  Volver al inicio</LinkWithQuery>
      
      <section className='character__detail__card'>
        <div 
          className='character__detail__card__house_image' 
          style={{backgroundImage: `url('../images/${characterFound.house.toLowerCase()}.jpg')`}}>
        </div>

        <img 
          className='character__detail__card__image' 
          src={translatedCharacter.image} 
          alt={`Imagen de ${translatedCharacter.name}`}  
          title={`Imagen de ${translatedCharacter.name}`}
        />

        <h3 className='character__detail__card__name'>{translatedCharacter.name}</h3>

        <div class="character__detail__card__text">
          {alternativeNames}

          <p className='character__detail__card__alive'>Estatus:  {translatedCharacter.alive} {isAlive}</p>

          <p className='character__detail__card__actor'>Actor: {translatedCharacter.actor}</p>

          <a 
          href={`https://es.wikipedia.org/wiki/${actorNameUrl}`}  target="_blank" 
          rel="noopener noreferrer" className='character__detail__card__actor--wiki link'>
            Click aquí para información sobre {translatedCharacter.actor} 
          </a>

          <p className='character__detail__card__specie'>Especie: {translatedCharacter.species}</p>

          <p className='character__detail__card__gender'>Género:{translatedCharacter.gender}</p>

          <p className='character__detail__card__house'>Casa: {translatedCharacter.house}</p>

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