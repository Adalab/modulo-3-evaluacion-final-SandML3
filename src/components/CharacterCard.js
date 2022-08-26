
const  CharacterCard = (props) => {

    return <li className='main__character__list__item'>

        <section className='main__character__list__card'>

            <img className='main__character__list__card__image' src={props.image} alt={`Imagen de ${props.name}`}  title={`Imagen de ${props.name}`}/>

            <h3 className='main__character__list__card__name'>{props.name}</h3>

            <p className='main__character__list__card__specie'>{props.species}</p>

        </section>
    </li> 
};


export default CharacterCard;