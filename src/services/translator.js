import dictionary from '../data/translateDictionary.json'

const translateDetails = (character) => {
return {
    image: character.image,
    name: character.name,
    actor: character.actor,
    house: character.house,
    gender: dictionary.gender[character.gender],
    species: character.species === 'human'
      ?dictionary.species[character.species][character.gender]
      :dictionary.species[character.species],
    alive: dictionary.alive[character.alive][character.gender],
  }
};

export default translateDetails;