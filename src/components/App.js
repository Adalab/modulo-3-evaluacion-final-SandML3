import '../styles/App.scss';

import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import uuid from 'react-uuid';

import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

import {useLocation, matchPath} from 'react-router';



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
  };

  const { pathname } = useLocation();
  // console.log(pathname)

  const dataPath = matchPath('character/:characterId', pathname)

  const characterId = dataPath !== null
    ?dataPath.params.characterId
    :null;

  const characterFound = characterData.find(character => character.id === characterId);


  return (
    <div>
      <Routes>
        <Route 
        path='/' 
        element={<>
          <Header/>

          <main className='main'>

            <Form characterData={characterData} filterValues={filterValues} updateFilterValues={updateFilterValues} />

            <CharacterList characterData={characterData}  filterValues={filterValues}/>
          </main>
        </>}
        />

        <Route 
        path='/character/:characterId' 
         element={<CharacterDetail characterFound={characterFound} characterData={characterData}/>}
        />

      </Routes>

    </div>
  );
}

export default App;