import '../styles/App.scss';

import callToApi from '../services/api';
import ls from '../services/localstorage';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';

import uuid from 'react-uuid';

import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


function App() {

  const [characterData, setCharacterData] = useState(ls.get('characterData', []));
  
  const [filterValues, setFilterValues] = useState(ls.get('filtersData', {
    name: '',
    house: 'gryffindor',
    sort: false,
    gender: 'all'
  }));


  useEffect(() => {
    callToApi().then(response => {
      const result = response.map((item, index) =>({...item, "id":uuid() , 'index': index}))
      
      setCharacterData(result)
    });
  }, []);


  useEffect(() => {
    ls.set('characterData', characterData);
  }, [characterData]);


  useEffect(() => {
    ls.set('filtersData', filterValues);
  }, [filterValues]);


  const updateFilterValues = (key, value) => {
    setFilterValues({...filterValues, [key]:value})
  };

  const resetFilterValues = () => {
    setFilterValues({
      name: '',
      house: 'gryffindor',
      sort: false,
      gender: 'all'
    })
  };

  const { pathname } = useLocation();
  // console.log(pathname)

  const dataPath = matchPath('character/:characterId', pathname)
  // console.log(dataPath)
  
  const characterId = dataPath !== null
    ?dataPath.params.characterId
    :null;

  const characterFound = characterData.find(character => character.index.toString() === characterId);


  return (
    <div>
      <Routes>
        <Route 
        path='/' 
        element={<>
          <Header/>

          <main className='main'>

            <Form characterData={characterData} filterValues={filterValues} updateFilterValues={updateFilterValues} resetFilterValues={resetFilterValues}/>

            <CharacterList characterData={characterData}  filterValues={filterValues}/>
          </main>
        </>}
        />

        <Route 
        path='/character/:characterId' 
         element={<CharacterDetail characterData={characterData} 
         characterFound={characterFound} 
         />}
        />

        {/* <Route 
        path='*' 
         element={<h1>Not Found</h1>}
        /> */}


      </Routes>

    </div>
  );
}

export default App;