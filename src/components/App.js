import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import uuid from 'react-uuid';

function App() {

  const [characterData, setCharacterData] = useState([]);
  const [filterValues, setFilterValues] = useState({});

  useEffect(() => {
    callToApi().then(response => {
      const result = response.map((item,index) =>( {...response[index], "id":uuid()}))
      setCharacterData(result)
    });
    
  }, []);


  return (
    <div>
      <Header/>

      <main className='main'>
        <Form characterData={characterData}/>
        <CharacterList characterData={characterData} />
      </main>

    </div>
  );
}

export default App;