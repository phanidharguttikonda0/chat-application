import React, { useState } from 'react';
import css from "./css/Chat.module.css";


const chats = [

    [ 'IfA48lCH', 'HxwxO4Fj' ],
    [ 'X268nzjz', 'OMs6CWs3', 'AAqqfxBA' ],
    [ 'x3CNdbOZ', 'E6LfehCM', 'MALh7eoY', 'WjaQcHGW' ],
    [ 'cOuselsX', 'SrTeNnQn', 'sWVZp7IX' ],
    [ 'e5rx0TCX', 'F0objKHJ', 'H15eeuwe', 'tbG5trOz', '2JPZMwB4' ],
    [ 'jPrRVtgP', 'lCu3JXKR' ],
    [ 'CwWg4vZi' ],
    [ 'APX2HnwJ', 'k7xuDCNK', 'xbjMYbKn', 'wt6ei6u6', '7ssOKMY2' ],
    [ 'GRLTNVSm', 'MFL5gboE' ],
    [ 'FBRpPYrw' ]

] ;

/* 

The green color will be his reply and the red color will be other user reply
based on the first reply we will main-tain that

*/


function Chat(props) {

    const [message, changemessage] = useState("") ;

    // we are going to create an socket over here

    return (
        <div className={css.chat}>
            {
                props.user.length === 0 ? <div>
                    NO Chats Yet
                </div> : <div className={css.userchat}>
                    <header>
                    {props.user}
                    </header>
                    <body>
                    {
                        // here we are going to render the chat
                        chats.map((item, index) => 
                            <div className={css.messages} key={index}>
                                {
                                    index %2 === 0 ? item.map((item1, index1) =>
                                    <h5 key={String(index) + String(index1)} className={css.msg2}>
                                        {item1}
                                    </h5>
                                ) : item.map((item1, index1) =>
                                <h5 key={String(index) + String(index1)} className={css.msg1}>
                                    {item1}
                                </h5>
                            )
                                }
                            </div>
                        )
                    }
                    </body>
                    <footer>
                        <input type='text' placeholder='send message' value={message} onChange={(event) => {
                            changemessage(event.target.value) ;
                        }} />
                        <button> send </button>
                    </footer>
                </div>
            }
        </div>
    );
}

export default Chat;