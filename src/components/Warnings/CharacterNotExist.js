import { LinkWithQuery } from '../../services/LinkWithQuery';
import '../../styles/Warnings/CharacterNotExist.scss'


const CharacterNotExist = () => {
    return <div className='not_exist'>
        <h2 className='not_exist__title'>¡ Oh, no... !</h2>
       
        <p className='not_exist__text'>El personaje que buscas no existe.</p>
        <p className='not_exist__text'>Eso o... es información ultraprivada del mundo de los magos. Por desgracia, siempre te quedará esa incógnita.</p>
        <LinkWithQuery to="/" className='not_exist__link link'>Volver al inicio </LinkWithQuery>

        </div>
}

export default CharacterNotExist;