import styles from"./userProfile.module.css"
import Topbar from "../profileTopbar/Topbar"
import Feed from "../profileFeed/Feed"
import Post from "../profileFeed/Post/Post"
import Leftbar from "../profileLeftbar/Leftbar"
import Rightbar from "../profileRightbar/Rightbar"
//import {School} from "@material-ui/icons";

export default function userProfile() {
    return ( 
    <>
        <div className = {styles.userProfile}>
            <Leftbar/>
            <div className={styles.userProfileRight}>
                <div className = {styles.userProfileRightTop}>
                    <div className = {styles.userProfileCover}>
                        <img className = {styles.userProfileCoverImg}src = "assets/person/coverImg.jpg"alt = "cover picture"/>
                        <img className = {styles.userProfileUserImg}src = "assets/person/2.jpeg"alt = "user picture"/>
                    </div>
                    <div className={styles.userProfileInfo}>
                        <h4 className={styles.userProfileInfoName}>Nelson Jacob</h4>
                        <div className={styles.userProfileInfoDesc}> <i class="fas fa-chalkboard-teacher userProfileIcon"></i>Alumni/Mentor</div>
                        <div className={styles.userProfileInfoDesc}><i class="fas fa-graduation-cap userProfileIcon"></i>Class of 2006</div>
                    </div>
                    <button className={styles.userProfileAddButton} type="">Add</button>
                </div> 
                <div className = {styles.userProfileRightBottom} >
                    <Feed/>
                    <Rightbar userProfile/>
                </div>  
            </div>
        </div>  
    </>
    );
}