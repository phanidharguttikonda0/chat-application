import React from 'react';
import css from "./css/Chat.module.css";

function Chat(props) {
    return (
        <div className={css.chat}>
            {
                props.user.length === 0 ? <div>
                    NO Chats Yet
                </div> : <div className={css.userchat}>
                    Clicked user : {props.user}
                </div>
            }
        </div>
    );
}

export default Chat;