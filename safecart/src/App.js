import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
import { Authentication } from './Authentication.js';
import { useEffect, useState } from 'react';
import { getDataFromCookie } from './services/storage.service.js';
import { UserContext } from './services/usercontext.service.js';
import { store } from './services/redux-storage.service.js';


function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    if(document.cookie != null && document.cookie != "" && document.cookie.split("=")[1] != 'null'){
        try{
            setUser(JSON.parse(document.cookie.split("=")[1]));
        }
        catch(error){
        }
    }
    
}, [user]);


  // function getUserData(){
  //   let data = getDataFromCookie();
  //   setUser(data);

  //   //redux
  //   store.subscribe(() => {
  //     setUser(store.getState()?.user)
  //   });

  // }


  return (

    <div>
 
      <BrowserRouter>
        <Authentication>
          <UserContext.Provider value={user}>         
            <AppRouter></AppRouter>
          </UserContext.Provider>
        </Authentication>
      </BrowserRouter>

    </div>

  );
}

export default App;
