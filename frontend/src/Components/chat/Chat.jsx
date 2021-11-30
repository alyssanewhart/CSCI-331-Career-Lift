import './Chat.css'
import { format } from 'timeago.js'

export default function Chat({ currentUser, message, own}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className= {own ? "chat own" : "chat"}> 
            <div className= "chatTop">
                {/* FIXME:*/}
                <hr className="ChatHr" />
                <img className="chatImg" src={own ? PF+"person/noAvatar.png" : PF+"person/noAvatar.png"} alt=""/>
                <span className="chatterName">{ own ? currentUser.name: "the other person's name"}</span>
            <span className="chatTime">{format(message.createdAt)}</span>
               </div>
            
            <div className="chatBottom">
            <p className="chatText">
                {message.text}
            </p>
            </div>
        </div>
    )
}
