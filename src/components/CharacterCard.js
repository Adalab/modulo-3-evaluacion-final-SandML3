import { Link } from 'react-router-dom';


const  CharacterCard = (props) => {

    

    return <Link to={`/character/${props.character.index}`}>
        <section className='main__character__list__card'>
            <img className='main__character__list__card__image' src={props.character.image} alt={`Imagen de ${props.character.name}`}  title={`Imagen de ${props.character.name}`}/>
            <h3 className='main__character__list__card__name'>{props.character.name}</h3>
            <p className='main__character__list__card__specie'>{props.character.species}</p>
            </section>
    </Link>
};


export default CharacterCard;