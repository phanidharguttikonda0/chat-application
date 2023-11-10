import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/Login_Components/SignIn';
import SignUp from './pages/Login_Components/SignUp';

export const usernameContext = React.createContext() ;
export const usernameChangeContext = React.createContext() ;

function App() {

  const [username, changeusername] = useState("") ;

  return (
    <BrowserRouter>
      <usernameContext.Provider value={username}>
        <usernameChangeContext.Provider value={changeusername}>
          <div className="App">
            <Routes>
              <Route path='/' element={ <Home /> }/>
              <Route path='/Sign-Up' element={ <SignUp /> } />
              <Route path='/Sign-In' element={ <SignIn /> }/>
            </Routes>
          </div>
        </usernameChangeContext.Provider>
      </usernameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
