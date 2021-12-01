
import styles from "./Post.module.css"
import { MoreVert, ThumbUpAlt, FavoriteBorder, Bookmarks } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import {format} from "timeago.js"
import {Button} from 'react-bootstrap';



export default function Post({post, user}) {

  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [newUser, setNewUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  

  useEffect(() => {
      setIsLiked(post.likes.includes(user._id))

  }, [user._id, post.likes])

  const likeHandler =()=>{
      try{
          axios.put("/posts/"+post._id+"/like", {userId: user._id})

      }catch(err){}
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }



    useEffect(() => {
        // because we can't use await in useEffects hook
        // neeed a separate function
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
             setNewUser(res.data)

        };
        fetchUser();      
    }, [post.userId]);

  /*  function deletePost (e) {

        console.log(e.target.values)
        try {
            axios.delete(`/${post.userId}`);

        }
        catch(e) {
            console.log(e)
        }
    } */

    console.log(user)
    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <Link to={`/userProfile/${user.name}`}>
                        <img className={styles.postProfileImg} src= {user.profilePicture} alt="profile picture"/>
                        </Link>
                        
                        
                        <span className={styles.postUserName}>
                            {user.name}
                        </span>
                        <span className={styles.postDate}>{format(post.createdAt)}</span>
                    </div>
                    <div className={styles.postTopRight}>
                        {/*<MoreVert onClick ={(e) => deletePost(e)}/> */}
                        <MoreVert/>
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>{post?.desc}</span>
                    <img className={styles.postImg} src={PF+post.img} alt=""/>
                </div>
                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                         <ThumbUpAlt className={styles.likeIcon} onClick={likeHandler} />
                         <FavoriteBorder className={styles.likeIcon} onClick={likeHandler} />
                         <Bookmarks className={styles.likeIcon}/>
                         <span className={styles.postLikeCounter}>{like}Likes</span>
                    </div>
                    <div className={styles.postBottomRight}>
                    <span className={styles.postCommentText}>{post.comment}Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}