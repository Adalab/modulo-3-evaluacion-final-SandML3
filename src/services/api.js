
const callToApi = () => {
   
    return fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((response) => {
        const result = response.map( item => ({
            name: item.name,
            house: item.house,
            image: item.image
              ?item.image
              :'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter',
            alive: item.alive,
            species: item.species,
            gender: item.gender,
            actor: item.actor
        }));
        return result
      });
    };
        
  export default callToApi;

