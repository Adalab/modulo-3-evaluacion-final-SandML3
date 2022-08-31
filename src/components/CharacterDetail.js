import '../styles/CardDetail.scss';
import PropTypes from 'prop-types';
import getRenderData from '../services/dataProcesing';
import { LinkWithQuery } from '../services/LinkWithQuery';


const  CharacterDetail = ( { characterFound } ) => {

  const character= getRenderData(characterFound);


  return <div className='character__detail'>

      <LinkWithQuery to='/' className='character__detail__button--home button link'><i className="fa-solid fa-caret-left"></i>  Volver al inicio</LinkWithQuery>
      
      <section className='character__detail__card'>
        <div 
          className='character__detail__card__house_image' 
          style={{backgroundImage: `url(${character.background})`}}>
        </div>

        <img 
          className='character__detail__card__image' 
          src={character.data.image} 
          alt={`Imagen de ${character.data.name}`}  
          title={`Imagen de ${character.data.name}`}
        />

        <h3 className='character__detail__card__name'>{character.data.name}</h3>

        <div className="character__detail__card__text">
          {character.alternativeNames}

          {character.isAlive}

          <p className='character__detail__card__actor'>Actor: {character.data.actor}</p>

          <a 
          href={`https://es.wikipedia.org/wiki/${character.actorNameUrl}`}  target="_blank" 
          rel="noopener noreferrer" className='character__detail__card__actor--wiki link'>
            Click aquí para información sobre {character.data.actor} 
          </a>

          {character.species}

          <p className='character__detail__card__gender'>Género: {character.data.gender}</p>

          <p className='character__detail__card__house'>Casa: {character.data.house}</p>

        </div>
      </section>
    </div>
};


CharacterDetail.propTypes = {
  characterData: PropTypes.array(PropTypes.object).isRequired,
  characterFound: PropTypes.object.isRequired
}

export default CharacterDetail;