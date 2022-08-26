import { Link } from 'react-router-dom';


const  CharacterCard = (props) => {

    return <Link to={`/character/${props.id}`}>
        <section className='main__character__list__card'>
            <img className='main__character__list__card__image' src={props.image} alt={`Imagen de ${props.name}`}  title={`Imagen de ${props.name}`}/>
            <h3 className='main__character__list__card__name'>{props.name}</h3>
            <p className='main__character__list__card__specie'>{props.species}</p>
            </section>
    </Link>
};


export default CharacterCard;