import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const  Form = (props) => {
    
  const { characterData } = props;



    return <form className='main__filters'>
       
    <FilterName characterData={characterData}/>

    <FilterHouse characterData={characterData}/>

  </form>
};


export default Form;