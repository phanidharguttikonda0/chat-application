import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/Login_Components/SignIn';
import SignUp from './pages/Login_Components/SignUp';

export const usernameContext = React.createContext() ;
export const usernameChangeContext = React.createContext() ;
export const chatsContext = React.createContext() ;
export const changechatsContext = React.createContext() ;

function App() {

  const [username, changeusername] = useState("") ;
  const [chats, changechats] = useState([]) ;

  useEffect(() => {
    if(username.length !== 0 ){
      async function main() {
        console.log((await axios.post("http://127.0.0.1:8080/", {username: username})).data)
        changechats((await axios.post("http://127.0.0.1:8080/", {username: username})).data) ;
        console.log("Done") ;
      }
      main() ;
    }
  }, [username]) ;

  return (
    <BrowserRouter>
      <chatsContext.Provider value={chats}>
        <changechatsContext.Provider value={changechats}>
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
        </changechatsContext.Provider>
      </chatsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
