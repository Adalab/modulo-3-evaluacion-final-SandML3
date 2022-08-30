import { LinkWithQuery } from './Custom Hook/LinkWithQuery';
import notFound from '../images/notFound.png';
import '../styles/NotFound.scss';


const NotFound = () => {
    return <div className='not_found'>
        <img className='not_found__image' src={notFound} title='' alt='' /> 
        <p style={{textAlign:"center"}}>
            <LinkWithQuery to="/" className='not_found__link link'>Volver al inicio </LinkWithQuery>
        </p>
        </div>
}

export default NotFound;