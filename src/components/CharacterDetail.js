import { Link } from 'react-router-dom';


const  CharacterDetail = (props) => {
    return <>
        <Link 
        // to={}
        >Volver</Link>
        
        <div className="character__detail">
            <section className='character__detail__card'>
                <img className='character__detail__card__image' src={props.image} alt={`Imagen de ${props.name}`}  title={`Imagen de ${props.name}`}/>
                <h3 className='character__detail__card__name'>{props.name}</h3>
                <p className='character__detail__card__actor'>{props.actor}</p>
                <p className='character__detail__card__specie'>{props.species}</p>
                <p className='character__detail__card__gender'>{props.gender}</p>
                <p className='character__detail__card__house'>{props.house}</p>
        
            </section>
        </div>
    </>
};


export default CharacterDetail;