
import characterPic from '../images/characterPic.png'

const callToApi = () => {
   
    return fetch('https://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((response) => {
        const result = response.map( item => ({
            name: item.name,
            house: item.house,
            image: item.image
              ?item.image
              :characterPic,
            alive: item.alive,
            species: item.species,
            gender: item.gender,
            actor: item.actor,
            alternate_names: item.alternate_names
        }));
        return result
      });
    };
        
  export default callToApi;

