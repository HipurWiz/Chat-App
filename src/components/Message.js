import React from 'react';
import {formatRelative} from 'date-fns';

const Message = ({
    createdAt =  null,
    text = '',
    displayName = '',
    photoURL = '',
}) => {
    setTimeout(function(){
        document.getElementById("dummy").scrollIntoView({behavior: "smooth"});
    },50);
    return (
        <div>
            <div class="info">
                {photoURL ? (
                    <img src={photoURL} alt="Avatar" width={45} height={45} class="avatars"></img>
                ) : null}
                <p class="display">{displayName}</p>
                {createdAt?.seconds ? (
                    <p class="timestamp">
                        {formatRelative(new Date(createdAt.seconds*1000), new Date())}
                    </p>
                ) : null}
            </div>
            <div class="msgtextdisplay">
                <center><p class="msgtext">{text}</p></center>
            </div>
        </div>
    )
}

export default Message;