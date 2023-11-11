import axios from "axios";
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usernameChangeContext } from "../../App";
import css from "./SignUp.module.css";

function SignIn(props) {

    const [username, changeusername] = useState("") ;
    const [password, changepassword] = useState("") ;
    const usernamechange = useContext(usernameChangeContext) ;
    const navigate = useNavigate() ;

    const signIn = async () => {
        let form = {
            username: username,
            password: password
        }
        let response = await axios.post("http://127.0.0.1:8080/Sign-In", form) ; // now we are going to check whether the details are correct or wrong
        console.log(response) ;
        if(response.data === true) {
            usernamechange(username) ;
            navigate("/") ;
        }
    }

    return (
        <div className={css.up}>
            
            <div className={css.upin}>
            <h2> 
                Sign In
            </h2>
                <input type='text' placeholder='username' value={username} onChange={(event) => {
                    changeusername(event.target.value) ;
                }}/>
                <input type='text' placeholder='password' value={password} onChange={(event) => {
                    changepassword(event.target.value) ;
                }} />
            <Link to={'/Sign-Up'}> Sign-Up </Link>
            <button onClick={signIn}> continue </button>
            </div>
        </div>
    );
}

export default SignIn;