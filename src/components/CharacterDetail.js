import { Link } from 'react-router-dom';


const  CharacterDetail = (props) => {



    return <>
        <Link 
        to='/'
        >Volver</Link>
        
        <div className="character__detail">
            <section className='character__detail__card'>
                <img className='character__detail__card__image' src={props.characterFound.image} alt={`Imagen de ${props.characterFound.name}`}  title={`Imagen de ${props.characterFound.name}`}/>
                <h3 className='character__detail__card__name'>{props.characterFound.name}</h3>
                <p className='character__detail__card__actor'>{props.characterFound.actor}</p>
                <p className='character__detail__card__specie'>{props.characterFound.species}</p>
                <p className='character__detail__card__gender'>{props.characterFound.gender}</p>
                <p className='character__detail__card__house'>{props.characterFound.house}</p>
        
            </section>
        </div>
    </>
};


export default CharacterDetail;