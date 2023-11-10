import axios from "axios";
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usernameChangeContext } from "../../App";
import css from "./SignUp.module.css";

function SignUp(props) {

    const [email, changeEmail] = useState("") ;
    const [mobileNumber, changeMobileNumber] = useState("") ;
    const [username, changeUserName] = useState("") ;
    const [password, changePassword] = useState("") ;
    const usernamechange = useContext(usernameChangeContext) ;
    const navigate = useNavigate() ;

    const submit = async () => {
        let form = {
            email: email,
            mobile_number: mobileNumber,
            username: username,
            password: password
        }
        const response = await axios.post("http://127.0.0.1:8080/Sign-Up", form) ;
        console.log(response) ;
        if(response.data === true) {
            usernamechange(username) ;
            navigate('/') ;
        }
    }
    
    return (
        <div className={css.up}>
            
            <div className={css.upin}>
            <h2> 
                Sign Up
            </h2>
                <input type='text' placeholder='email' value={email} onChange={
                    (event) => {changeEmail(event.target.value)}
                }/>
                <input type='number' placeholder='mobile number' value={mobileNumber}
                onChange={
                    (event) => {
                        changeMobileNumber(event.target.value) ;
                    }
                }/>
                <input type='text' placeholder='set username' value={username} 
                    onChange={
                        (event) => {
                            changeUserName(event.target.value) ;
                        }
                    }
                />
                <input type='text' placeholder='set password' value={password} 
                    onChange={
                        (event) => {
                            changePassword(event.target.value) ;
                        }
                    }
                />
                <Link to={'/Sign-In'}> Sign-In </Link>
                <button onClick={submit}> continue </button>
            </div>
        </div>
    );
}

export default SignUp;