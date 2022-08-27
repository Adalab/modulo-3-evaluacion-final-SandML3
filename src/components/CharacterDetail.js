import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router';
// import { useEffect } from 'react';



const  CharacterDetail = (props) => {
 
  const { characterFound } = props;
  // const { pathname } = useLocation();
  // const dataPath = matchPath('character/:characterId', pathname)

  // const characterId = dataPath !== null
  //   ?dataPath.params.characterId
  //   :null;

  // const newCharacterFound = props.characterData.find(item => item.id === characterId);

  // const character = characterFound
  //   ?characterFound
  //   :newCharacterFound
 

  return <>
    <Link 
    to='/'
    >Volver</Link>
        
    <div className="character__detail">
        <section className='character__detail__card'>
            <img className='character__detail__card__image' src={characterFound.image} alt={`Imagen de ${characterFound.name}`}  title={`Imagen de ${characterFound.name}`}/>
            <h3 className='character__detail__card__name'>{characterFound.name}</h3>
            <p className='character__detail__card__actor'>{characterFound.alive}</p>
            <p className='character__detail__card__actor'>{characterFound.actor}</p>
            <p className='character__detail__card__specie'>{characterFound.species}</p>
            <p className='character__detail__card__gender'>{characterFound.gender}</p>
            <p className='character__detail__card__house'>{characterFound.house}</p>
        
        </section>
     </div>
  </>
};


export default CharacterDetail;