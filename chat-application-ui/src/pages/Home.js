import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { usernameContext } from '../App';
import css from "./css/Home.module.css";

function Home(props) {

    const username = useContext(usernameContext) ;
    const navigate = useNavigate() ;

    return (
        <div>
            {
                username.length === 0 ? <div className={css.homeusername}>
                    <div>
                        <button onClick={() => { navigate('/Sign-Up') }}> Sign-Up </button>
                        <h2> Or </h2>
                        <button onClick={() => { navigate('/Sign-In') }}> Sign-In </button>
                        </div>
                    </div> : <div className={css.home}> Welcome to Home Page </div>
            }
        </div>
    );
}

export default Home;