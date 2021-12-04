import styles from './Messages.module.css'
import Topbar from '../../ProtectedNavbar/ProtectedNavbar'
import { MessageRounded, SearchOutlined } from '@material-ui/icons';
import Conversation from '../../Conversation/Conversation';
import Chat from '../../chat/Chat';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import {io} from "socket.io-client";
import { Link } from "react-router-dom";
import { axiosObject } from '../../../config';



export default function Messages() {

    const {user} = useContext(AuthContext)


    console.log("here")
    console.log(user)

    const [convo, setConvo] = useState([])
    const[currentChat, setCurrentChat] = useState(null)
    const[messages, setMessages] = useState(null)
    const[newMessages, setNewMessages] = useState("")
    const[incomingMessage, setIncomingMessages] = useState(null)
    const socket = useRef()
    const scrollRef = useRef();
    const[connections, setConnections] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;




    //for the connections list

    useEffect(() => {
        const getConncetions = async () => {
          try {
            const connectionList = await axiosObject.get("/users/connections/"+user._id);
            setConnections(connectionList.data)
          }catch(err){
            console.log(err)
          }
        };
         getConncetions();
      }, [user])

   

    
    useEffect (() => {
        socket.current = io("ws://localhost:8900");
        //receiving messages from the server.
        //.on (server --> client with event message)
        socket.current.on("getMessage",  (data) => {
            setIncomingMessages({
                //matching the database schema
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        });
    }, [])

    useEffect(() => {
        //checking the user in the conversation before updating the message
        incomingMessage && currentChat?.members.includes(incomingMessage.sender) &&
        //adding on the previous messages
        setMessages((lastMessage) => [...lastMessage, incomingMessage]);

    }, [incomingMessage, currentChat])


    // to send message to the server
    // socket.emit
    // sending the userId
    useEffect(() => {
        socket.current.emit("addNewUser", user._id);
        //receiving from server
        socket.current.on("getUsers", users=>{
            console.log("socket users")
            console.log(users)
        })
    }, [user])


   

    useEffect(() => {
        const getConvo = async () => {
            try{       
                const response = await axiosObject.get("/conversations/"+user._id)
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
                const res = await axiosObject.get("/messages/"+currentChat?._id)
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

        // finding the receiver id from the current chat
        const receiverId = currentChat.members.find((member) => member !== user._id)
        console.log("receiverID")
        console.log(receiverId)
        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessages,

        })

        try {
            const res = await axiosObject.post("/messages/", message);
            //the message will be the same will just add res.data
            setMessages([...messages, res.data ])
            setNewMessages("");

        } catch(err) {
            console.log(err)
        }

    }

    //Another useEffect to send the message

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
        <div className={styles.messengerContainer}>
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
            <div className={styles.connectionList}>
                <div className={styles.rightbarFollowings}>
                    {connections.map((connection) =>  (
                    <Link to={"/userProfile/"+connection.name}style={{textDecoration:"none"}}>         
                    <div className={styles.rightbarFollowing}>
                        <img src={ connection.profilePicture ? PF + connection.profilePicture :  PF+"person/noAvatar.png"} alt="" className={styles.rightbarFollowingImg}/>
                    <span className={styles.rightbarFollowingName} > {connection.name} </span>
                    </div>
                    </Link>))};
                </div>
            </div>

        </div>
    
        </>
    );
}
