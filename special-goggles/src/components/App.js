import React, { useState, useEffect } from 'react';
import {authService} from "fbase";
import AppRouter from './common/Router';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged( (user) => {
      if(user){
        setUserObj({
          displayName : user.displayName,
          uid : user.uid,
          updateProfile : (args) => user.updateProfile(args)
        });
      }else{
        setUserObj(null);
      }

      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn = {Boolean(userObj)} userObj={userObj} /> : "Initializing ..." }
      <footer>&copy; Special-Goggle {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
