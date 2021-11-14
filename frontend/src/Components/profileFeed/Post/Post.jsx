import styles from "./Post.module.css"
import { MoreVert, ThumbUpAlt, FavoriteBorder, Bookmarks } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import userProfile from "../../pages/userProfile";""

import React from 'react'

export default function Post() {
    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <img className={styles.postProfileImg} src="/assets/person/2.jpeg" alt=""/>
                        <span className={styles.postUserName}>
                            <Link to="/userProfile" className={styles.postUserName}>Nelson Jacob </Link>
                        </span>
                        <span className={styles.postDate}>1 min ago</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert/>
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>Hey Everyone, I am Nelson. MSU class 0f 2006. I am looking for intern students for my startup company. </span>
                    <img className={styles.postImg} src="/assets/post/3.jpeg" alt=""/>
                </div>
                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                         <ThumbUpAlt className={styles.likeIcon}/>
                         <FavoriteBorder className={styles.likeIcon}/>
                         <Bookmarks className={styles.likeIcon}/>
                         <span className={styles.postLikeCounter}>7 people liked this</span>
                    </div>
                    <div className={styles.postBottomRight}>
                    <span className={styles.postCommentText}>5 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
