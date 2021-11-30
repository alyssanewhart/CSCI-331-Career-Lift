import styles from "./Post.module.css"
import { MoreVert, ThumbUpAlt, FavoriteBorder, Bookmarks } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import {format} from "timeago.js"
import { AuthContext } from "../../../context/AuthContext";




export default function Post({post}) {

  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user:currentUser } = useContext(AuthContext);

  useEffect(() => {
      setIsLiked(post.likes.includes(currentUser._id))

  }, [currentUser._id, post.likes])

  const likeHandler =()=>{
      try{
          axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})

      }catch(err){}
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
 


    useEffect(() => {
        // because we can't use await in useEffects hook
        // neeed a separate function
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
             setUser(res.data)

        };
        fetchUser();      
    }, [post.userId]);

    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <Link to={`/userProfile/${user.name}`}>
                        <img className={styles.postProfileImg} src= {user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt=""/>
                        </Link>
                        
                        
                        <span className={styles.postUserName}>
                            {user.name}
                        </span>
                        <span className={styles.postDate}>{format(post.createdAt)}</span>
                    </div>
                    <div className={styles.postTopRight}>
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
                         <span className={styles.postLikeCounter}>{like}  people liked this</span>
                    </div>
                    <div className={styles.postBottomRight}>
                    <span className={styles.postCommentText}>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
