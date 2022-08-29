import '../styles/CharacterCard.scss';
import { LinkWithQuery } from './Custom Hook/LinkWithQuery';



const  CharacterCard = (props) => {

    
    // const handleClick = (ev) => {
    //    props.updateFilterValues('character', ev.currentTarget.id)
    // }

    


    return <LinkWithQuery  className='link' to={`/character/${props.character.index}`} 
    // onClick={handleClick} 
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


export default CharacterCard;