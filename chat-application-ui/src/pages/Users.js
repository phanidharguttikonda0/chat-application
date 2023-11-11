import React, { useContext } from 'react';
import { changeClickeduserContext } from './Home';
import css from "./css/users.module.css";

function Users(props) { // here we will pass the list of users that the user chated with other users

    const changeClickedusername = useContext(changeClickeduserContext) ;

    const userClicked = (username) => {
        // now we are going to add in userClicked context
        changeClickedusername(username) ;
    }

    return (
        <div className={css.users}>
            {
                props.users.map((item,index) => <div key={index} className={css.user} onClick={()=>{
                    userClicked(item)
                }}>
                    {item}
                    </div>)
            }
        </div>
    );
}

export default Users;