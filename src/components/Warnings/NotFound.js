import { LinkWithQuery } from '../../services/LinkWithQuery';
import notFound from '../../images/notFound.png';
import '../../styles/Warnings/NotFound.scss';


const NotFound = () => {
    return <div className='not_found'>
        <img className='not_found__image' src={notFound} title='Sombrero de mago' alt='Sombrero de mago' /> 
        <p style={{textAlign:"center"}}>
            <LinkWithQuery to="/" className='not_found__link link'>Volver al inicio </LinkWithQuery>
        </p>
        </div>
}

export default NotFound;