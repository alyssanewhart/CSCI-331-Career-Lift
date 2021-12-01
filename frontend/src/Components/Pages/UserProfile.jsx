import styles from"./userProfile.module.css"
//import Post from "../profileFeed/Post/Post"
import Leftbar from "../profileLeftbar/Leftbar"
import Rightbar from "../profileRightbar/Rightbar"
import React, { useEffect, useState } from 'react';
import Feed from "../profileFeed/Feed"
import axios from "axios"
import { useParams } from "react-router"
//import { AuthContext } from "../../Context/auth-context.js"

export default function UserProfile({user,setUser}) {
 
 const name = user.name;
 console.log(name)
 console.log(user.profilePicture)
 const PF = process.env.REACT_APP_PUBLIC_FOLDER;

 /* useEffect(() => {
        // because we can't use await in useEffects hook
        // neeed a separate function
        const fetchPosts =  async () => {
            const res = await axios.get(`/users?name=${name}`)
             setUser(res.data);
        };
            
        fetchPosts();      
    }, [name]);  */

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
                        <div className={styles.userProfileInfoDesc}><i class="fas fa-graduation-cap userProfileIcon"></i>C/O: {user.classOf}</div>
                    </div>
                    {/* <button className={styles.userProfileAddButton} type="">Add</button> */}
                </div> 
                <div className = {styles.userProfileRightBottom} >
                     <Feed user = {user}/>
                    <Rightbar user={user} name = {name}/>
                </div>  
            </div>
        </div>  
   </>
    );
}