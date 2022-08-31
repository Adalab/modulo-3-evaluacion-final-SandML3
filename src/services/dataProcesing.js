import gryffindor from '../images/gryffindor.jpg';
import ravenclaw from '../images/ravenclaw.jpg';
import hufflepuff from '../images/hufflepuff.jpg';
import slytherin from '../images/slytherin.jpg';

import translateDetails from '../services/translator';

const getRenderData = (character) => {

  const background = character.house.toLowerCase() === 'gryffindor'
  ?gryffindor
  :character.house.toLowerCase() === 'gryffindor'
    ?ravenclaw
    :character.house.toLowerCase() === 'gryffindor'
      ?slytherin
      :hufflepuff;
  
  const actorNameUrl = character.actor.replace(/ /g, "_");
  const translatedCharacter = translateDetails(character);

  const isAlive = character.alive
      ?<p className='character__detail__card__alive'>Estatus: {translatedCharacter.alive} <i className='fa-solid fa-heart-circle-bolt'></i></p>
      :<p className='character__detail__card__alive'>Estatus:  {translatedCharacter.alive} <i className='fa-solid fa-skull'></i></p>

  
  const alternativeNames = character.alternate_names.length !== 0
    ?<>
    <p className='character__detail__card__alternate_names'>Nombres alternativos:</p>
      <ul>
          {character.alternate_names.map((item, index) => <li key={index} className='character__detail__card__alternate_names--item'>{item}</li>)}
        </ul>
    </>
    :<p className='character__detail__card__alternate_names'>Este personaje no posee nombres alternativos.</p>;

    const species = character.species === 'human'
        ?<p className='character__detail__card__specie'>Especie: {translatedCharacter.species}<i className="fa-solid fa-person-half-dress"></i></p>
        :<p className='character__detail__card__specie'>Especie: {translatedCharacter.species}</p>


  return {
    data: translatedCharacter,
    species: species,
    background: background,
    actorNameUrl: actorNameUrl,
    translatedCharacter: translatedCharacter,
    isAlive: isAlive,
    alternativeNames: alternativeNames,
  }
};

export default getRenderData;