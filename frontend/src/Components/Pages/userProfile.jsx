import styles from"./userProfile.module.css"
import Topbar from "../ProtectedNavbar/ProtectedNavbar"
import Feed from "../Feed/Feed"
//import Post from "../profileFeed/Post/Post"
import Leftbar from "../Leftbar/Leftbar"
import Rightbar from "../Rightbar/Rightbar"
import React, { useEffect, useState } from 'react';

import axios from "axios"
import { useParams } from "react-router"
import { axiosObject } from "../../config"





export default function UserProfile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 const [user, setUser] = useState({});
 //magical hook for assigning to each user's page
 const name = useParams().name;
 

    useEffect(() => {
        // because we can't use await in useEffects hook
        // neeed a separate function
        const fetchPosts =  async () => {
            const res = await axiosObject.get(`/users?name=${name}`)
             setUser(res.data);
        };
            
        fetchPosts();      
    }, [name]);

    return ( 
    <>
        <div className = {styles.userProfile}>
            <Leftbar/>
            <div className={styles.userProfileRight}>
                <div className = {styles.userProfileRightTop}>
                    <div className = {styles.userProfileCover}>
                        <img className = {styles.userProfileCoverImg}src = {user.coverPicture} alt = "cover picture"/>
                        <img className = {styles.userProfileUserImg}src = {user.profilePicture} alt = "user picture"/>
                    </div>
                    <div className={styles.userProfileInfo}>
                        <h4 className={styles.userProfileInfoName}>{user.name}</h4>
                        <div className={styles.userProfileInfoDesc}> <i class="fas fa-chalkboard-teacher userProfileIcon"></i>{user.userType}</div>
                        <div className={styles.userProfileInfoDesc}><i class="fas fa-graduation-cap userProfileIcon"></i>{user.classOf}</div>
                    </div>
                    {/* <button className={styles.userProfileAddButton} type="">Add</button> */}
                </div> 
                <div className = {styles.userProfileRightBottom} >
                    {/* <Feed />
                    //next Step */}
                    <Feed name={name}/>
                    <Rightbar user={user}/>
                </div>  
            </div>
        </div>  
   </>
    );
}