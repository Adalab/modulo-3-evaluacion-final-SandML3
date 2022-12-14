import '../styles/App.scss';
import callToApi from '../services/api';
import ls from '../services/localstorage';

import { useEffect, useState } from 'react';
import { Route, Routes,useSearchParams } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';

import uuid from 'react-uuid';

import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';
import CharacterNotExist from './CharacterNotExist';


function App() {

  const [characterData, setCharacterData] = useState(ls.get('characterData', []));

  const [loading, setLoading] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams({
    name: '',
    house: 'gryffindor',
    sort: false,
    gender: 'all',
    state: 'true',
  });


  useEffect(() => {
    setLoading(true);
    callToApi().then(response => {
      const result = response.map((item, index) =>({...item, "id":uuid() , 'index': index}));
      setCharacterData(result);
      setLoading(false);
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
    setSearchParams({
      name: '',
      house: 'gryffindor',
      sort: false,
      gender: 'all',
      state: 'true',
    });
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('character/:characterId', pathname)

  const getCharacter = () => {
    const characterId = dataPath !== null 
    ?dataPath.params.characterId 
    :dataPath

    return characterData.find(character => character.index === parseInt(characterId));
  }
  


 
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
            searchParams={searchParams}
            />

            <CharacterList 
            characterData={characterData}  
            updateFilterValues={updateFilterValues}
            searchParams={searchParams}
            loading={loading}
            />

          </main>
        </>}
        />

        <Route 
        path='/character/:characterId' 
         element={getCharacter() 
            ?<CharacterDetail characterData={characterData} characterFound={getCharacter()} />
            :<CharacterNotExist />
        }
        />

        <Route path='*' element={<NotFound/>}/>


      </Routes>

    </div>
  );
}

export default App;