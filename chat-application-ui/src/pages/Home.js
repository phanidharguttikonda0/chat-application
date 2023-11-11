import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usernameContext } from "../App";
import Chat from "./Chat";
import SearchBar from "./SearchBar";
import Users from "./Users";
import css from "./css/Home.module.css";

export const clickedUserContext = React.createContext();
export const changeClickeduserContext = React.createContext();

function Home(props) {
  const username = useContext(usernameContext);
  const navigate = useNavigate();
  const [clickedUser, changeClickeduser] = useState(""); // this user chat will appear in the chat

  useEffect(() => {}, [clickedUser]) ;

  return (
    <div className={css.home}>
      {username.length === 0 ? (
        <div className={css.homeusername}>
          <div>
            <button
              onClick={() => {
                navigate("/Sign-Up");
              }}
            >
              {" "}
              Sign-Up{" "}
            </button>
            <h2> Or </h2>
            <button
              onClick={() => {
                navigate("/Sign-In");
              }}
            >
              {" "}
              Sign-In{" "}
            </button>
          </div>
        </div>
      ) : (
        <clickedUserContext.Provider value={clickedUser}>
          <changeClickeduserContext.Provider value={changeClickeduser}>
            <div className={css.homemain}>
              <div className={css.sideNav}>
                <SearchBar />
                <Users users={array} />
              </div>
              <div className={css.chat}>
                <Chat user={clickedUser}/>
              </div>
            </div>
          </changeClickeduserContext.Provider>
        </clickedUserContext.Provider>
      )}
    </div>
  );
}

export default Home;

var array = [ 

    "phani",
    "adi",
    "kohli",
    "hardik",
    "bhumhra",
    "gill",
    "ishan",
    "dhoni",
    "surya kumar",
    "kuldeep",
    "chahal",
    "gill",
    "ishan",
    "dhoni",
    "surya kumar",
    "kuldeep",
    "chahal"
 ] ;