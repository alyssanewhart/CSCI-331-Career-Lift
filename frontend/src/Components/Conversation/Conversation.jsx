import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './Conversation.module.css'

export default function Conversation({conversation, currentUser}) {

    const[user, setUser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    console.log("conversation")
    console.log(conversation)
    // console.log(currentUser)    


    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        
        const getFriend = async () => {
            try {
                const res = await axios.get(`/users?userId=`+friendId)
                setUser(res.data)
            } catch(err) {
                console.log(err)
            }
        };
        getFriend();
    }, [currentUser, conversation])
    return (
        <div className={styles.conversationWrapper}>
            <div className={styles.conversation}>
            <img className={styles.conversationImg} src={user?.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}/>
            <span className={styles.conversationName}>{user?.name}</span>
        </div>
        </div>
        
    )
}
