import '../../styles/List/CharacterCard.scss';
import { LinkWithQuery } from '../../services/LinkWithQuery';
import PropTypes from 'prop-types';


const  CharacterCard = (props) => {


    return <LinkWithQuery  className='link' to={`/character/${props.character.index}`} 
   
    id={props.character.index}>
        <section className='main__character__list__card'>
            <div className="main__character__list__card__image--wrapper">
                <img className='main__character__list__card__image' src={props.character.image} alt={`Imagen de ${props.character.name}`}  title={`Imagen de ${props.character.name}`}/>
            </div>
            
            <div className='main__character__list__card__text'>
                <h3 className='main__character__list__card__name text'>{props.character.name}</h3>
                <p className='main__character__list__card__specie text'>{props.character.species}</p>
            </div>
        </section>
            
    </LinkWithQuery>
};


CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
    updateFilterValues: PropTypes.func.isRequired
};

export default CharacterCard;