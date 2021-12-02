import styles from './Messages.module.css'
import Topbar from '../../ProtectedNavbar/ProtectedNavbar'
import { MessageRounded, SearchOutlined } from '@material-ui/icons';
import Conversation from '../../Conversation/Conversation';
import Chat from '../../chat/Chat';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import {io} from "socket.io-client";


export default function Messages() {

    const {user} = useContext(AuthContext)

    console.log("here")
    console.log(user)

    const [convo, setConvo] = useState([])
    const[currentChat, setCurrentChat] = useState(null)
    const[messages, setMessages] = useState(null)
    const[newMessages, setNewMessages] = useState("")
    const[socket, setSocket] = useState(null)

    const scrollRef = useRef();

    useEffect(() => {
        setSocket(io("ws://localhost:8900"))
    }, [])


    useEffect(() => {
        const getConvo = async () => {
            try{       
                const response = await axios.get("/conversations/"+user._id)
                setConvo(response.data)
            }catch(err){
                console.log(err)

            }
        };

        getConvo();
    }, [user._id]);
    console.log("userId")
    console.log(user._id)
   

    useEffect(() =>{

        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/"+currentChat?._id)
                setMessages(res.data)

            } catch (err) {
                console.log(err)
            }
        };
        getMessages();

    }, [currentChat])
    console.log("currentChat")

    // console.log(user)
    console.log(currentChat)
    console.log(messages)
    //
    // TODO:
    // Button Disabled only works once
    //FIXME: use useEffect to refresh the componenet

    const[state, setState] = useState(false)

    const buttonDisabled =  (e) =>{ 
        e.preventDefault();
      if(e.target.value.length !== 0){
      setState(true);}
      else{
      setState(false);}
    };


    const sendMessage = async (e) =>{
        e.preventDefault();

        const message = {
            sender: user._id,
            text: newMessages,
            conversationId: currentChat._id,
        };
        try {
            const res = await axios.post("/messages/", message);
            //the message will be the same will just add res.data
            setMessages([...messages, res.data ])
            setNewMessages("");

        } catch(err) {
            console.log(err)
        }

    }

    //simple use effect to scroll up automatically for new messages
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behaviour:"smooth"})
    }, [messages])

    //making one function to use two function on onChange
    //FIXME:
    const OneFunction = (e) =>{
        buttonDisabled(e);
        setNewMessages(e.target.value);

    }
    return (
        <>
        <Topbar/>
        <div className={styles.messenger}>
            <div className={styles.chatMenu}>
               <div className={styles.chatMenuWrapper}>
                   <div className={styles.chatTitle}>
                       <MessageRounded/>
                       <span className={styles.chatMessageTitle}>Messages</span>
                   </div>
                    <div className={styles.searchbar}>
                        <SearchOutlined className={styles.searchIcon} />
                        <input placeholder="Search for friends" className={styles.searchInput}/>
                    </div> 
                    {convo.map((conv) => (
                        <div onClick={() => setCurrentChat(conv)}>
                        <Conversation conversation ={conv} currentUser={user}/>
                        </div>

                    ))}
    
                </div>
           </div>
           <div className={styles.chatBox}>
               <div className={styles.chatBoxWrapper}>
                   {
                       currentChat ?
                   <>
                   <div className={styles.chatBoxTop}>
                       {messages.map(m => (
                           <div ref={scrollRef}> 
                            <Chat message = {m} own = {m.sender === user._id} currentUser={user} />
                            </div>
                       ))}
                      
                   </div>
                   <div className={styles.chatBoxBottom}>

                        {/* TODO: */}
                       {/* //button disabled */}
                       <textarea className={styles.chatTextArea} placeholder="Enter Message" onChange={(e) => OneFunction(e)} value={newMessages}></textarea>
                       {/* disabled:{state} */}
                       {/* FIXME: */}
                       <button className={styles.chatSubmitButton}  disabled={!state} onClick={sendMessage}>Send</button>
                   </div>
                   </>
                    : <span className={styles.startConvo}> No messages yet</span>} 
               </div>
           </div>
        </div>
    
        </>
    );
}
