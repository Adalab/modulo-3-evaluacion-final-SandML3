import '../styles/App.scss';
import callToApi from '../services/api';
import ls from '../services/localstorage';

import { useEffect, useState } from 'react';
import { Route, Routes,useSearchParams } from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';

import uuid from 'react-uuid';

import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';


function App() {

  const [characterData, setCharacterData] = useState(ls.get('characterData', []));
  

  const [searchParams, setSearchParams] = useSearchParams({
      name: '',
      house: 'gryffindor',
      sort: false,
      gender: 'all',
      character: ''
    });


  useEffect(() => {
    callToApi().then(response => {
      const result = response.map((item, index) =>({...item, "id":uuid() , 'index': index}))
      
      setCharacterData(result)
    });
  }, []);


  useEffect(() => {
    ls.set('characterData', characterData);
  }, [characterData]);



  const updateFilterValues = (key, value) => {
    searchParams.set(key, value)
    setSearchParams(searchParams);
  };

  const resetFilterValues = () => {
    setSearchParams('')
  };

  const { pathname } = useLocation();

  const dataPath = matchPath('character/:characterId', pathname)

  const characterId = dataPath !== null 
    ?dataPath.params.characterId
    :null
  
    console.log(characterId)
    console.log(pathname)

  const characterFound = characterData.find(character => character.index.toString() === characterId);


  return (
    <div className='page'>
      <Routes>
        <Route 
        path='/' 
        element={<>
          <Header/>

          <main className='main'>

            <Form 
            characterData={characterData}
            updateFilterValues={updateFilterValues} 
            resetFilterValues={resetFilterValues}
            searchParams={searchParams}/>

            <CharacterList 
            characterData={characterData}  
            updateFilterValues={updateFilterValues}
            searchParams={searchParams}/>

          </main>
        </>}
        />

        <Route 
        path='/character/:characterId' 
         element={<CharacterDetail characterData={characterData} 
         characterFound={characterFound} 
         />}
        />

        <Route path='*' element={<NotFound/>}/>


      </Routes>

    </div>
  );
}

export default App;