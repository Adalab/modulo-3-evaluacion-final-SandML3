import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import uuid from 'react-uuid';

function App() {

  const [characterData, setCharacterData] = useState([]);
  const [filterValues, setFilterValues] = useState({
    name: '',
    house: 'gryffindor'
  });

  useEffect(() => {
    callToApi().then(response => {
      const result = response.map((item) =>({...item, "id":uuid()}))
        
      setCharacterData(result)
    });
  }, []);


  const updateFilterValues = (key, value) => {
    setFilterValues({...filterValues, [key]:value})
  }

  return (
    <div>
      <Header/>

      <main className='main'>
        <Form characterData={characterData} filterValues={filterValues} updateFilterValues={updateFilterValues} />
        <CharacterList characterData={characterData}  filterValues={filterValues}/>
      </main>

    </div>
  );
}

export default App;