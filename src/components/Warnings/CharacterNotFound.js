import '../../styles/Warnings/CharacterNotFound.scss';
import PropTypes from 'prop-types';


const CharacterNotFound = (props) => {
  return <div className='characterNotFound'>
    <h2 className='characterNotFound__title'>¡Upsss!</h2>
    <p className='characterNotFound__text'>Lo sentimos, querido <span className='cursive'>muggle</span>...</p>
    <p className='characterNotFound__text'>No hay ningún personaje que coindida con la palabra <span className='word_not_find'>{props.name}</span>.</p>

    <p className='characterNotFound__text--instruction'>Puedes pulsar el botón 'Limpiar formulario' para volver a empezar</p>
  </div>
};

CharacterNotFound.defaultProps = {
  name: 'introducida' 
}

CharacterNotFound.propTypes = {
  name: PropTypes.string,
}

export default CharacterNotFound;