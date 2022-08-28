

const CharacterNotFound = (props) => {
  return <p>No hay ninguna persona que coindida con la palabra {props.searchParams.get('name')}</p>
};

export default CharacterNotFound;