import styles from "./Rightbar.module.css"
import { StarOutline } from "@material-ui/icons"
import { Users} from "../../dummyData"
import Online from "../online/online"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const[connections, setConnections] = useState([]);
  const { user:currentUser, dispatch } = useContext(AuthContext);
  //the must be set to the initial state
  const[followed, setFollowed] = useState(currentUser.followings.includes(user?.id));


   console.log(currentUser.followings)

  useEffect(() => {
    const getConncetions = async () => {
      try {
        const connectionList = await axios.get("/users/connections/"+user._id);
        setConnections(connectionList.data)
      }catch(err){
        console.log(err)
      }
    };
     getConncetions();
  }, [user])

  // when clicked sends the data to the database
  // 
  const followHandler= async () =>{
    try{
      if(followed){
        await axios.put(`/users/${user._id}/unfollow`, {userId:currentUser._id,});
        dispatch({type:"UNFOLLOW", payload:user._id});
      }else{
        await axios.put(`/users/${user._id}/follow`, {userId:currentUser._id,});
         dispatch({type:"FOLLOW", payload:user._id})
      }

    }catch(err){
      console.log(err)
    }
     setFollowed(!followed)
   
  };

    const HomeRightBar = () =>{
        return (
            <>
            <div className={styles.rightbarTop}>
                    <div className={styles.rightbarTopTitle}>
                        <StarOutline className={styles.featuredStart}/>
                        <span className={styles.featuredText}><b>Featured Posts</b></span>   
                    </div>
                    <div className={styles.featuredPostList}>
                    <a href="https://www.montana.edu/news/21025/msu-computer-science-professor-wins-prestigious-national-science-foundation-award" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/news.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>MSU computer science professor wins prestigious award</span>
                            </div>
                            {/* <div className={styles.featuredPostItemBottom}>
                                <span className={styles.featuredPostTimeText}>19 hours ago</span>
                                <span className={styles.featuredPostTimeText}>onXmaps</span>
                                <span className={styles.featuredPostTimeText}>Bozeman, Montana</span>
                            </div> */}
                        </div>
                      </a>

                      <a href="https://github.com/pittcsc/Summer2022-Internships" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/event.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>Softawre Engineering Intern Summer 2022</span>
                            </div>
                            
                        </div>
                        </a>
                        <a href="https://www.netmeister.org/blog/cpu-pinning-and-sets.html" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/calendar.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>CPU Pinning and CPU Sets</span>
                            </div>            
                        </div>
                        </a>
                        <a href="https://www.montana.edu/news/21006/engineering-college-s-three-minute-thesis-competition-to-be-held-april-1" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/event.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>Three Minute Thesis event set for April 1</span>
                            </div>       
                        </div>
                        </a>
                        <a href="https://twitter.com/search?q=computer+science+news&ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Esearch" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/news.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}> CS Twitter</span>
                            </div>    
                        </div>
                        </a>
                        <a href="https://www.cs.montana.edu/alumni/alumni-2022.html" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/job.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>MSU CS Grads 2022</span>
                            </div>
                            
                        </div>
                        </a>
                        <a href="https://www.msuaf.org/s/1584/rd18/home.aspx" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/event.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}> MSU Alumni Foundation</span>
                            </div>
                            
                        </div>
                        </a>
                        <a href="https://www.montana.edu/news/21366/msu-adds-to-cybersecurity-education-offerings-with-rotc-program" target="_blank">
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/event.svg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>MSU adds to cybersecurity education offerings with ROTC program</span>
                            </div>
                        </div>
                        </a>
                        
                    </div>
                    {/* <div className={styles.buttonWrapper}>
                            <button className={styles.featuredPostButton}>Show more</button>
                    </div> */}
                </div>
                {/* <h4 className={styles.rightbarBottomTitle}>My Network</h4>
                <ul className={styles.rightbarConnectionList}>
                    {Users.map((u) => (
                   <Online key={u.id} user={u} />
                      ))}           
                </ul> */}
            </>
        )
    }

    const ProfileRightBar = () =>{
        return (
            <>
            {user.name !== currentUser.name && (
              <button className={styles.rightbarConnectButton} onClick={followHandler}>
                {followed ? "Remove Connection" : "Connect"}
              </button>
            )}
            <h4 className={styles.rightbarTitle}>{user.name}'s Information</h4>
            <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Currently Working at:</span>
            <span className={styles.rightbarInfoValue}>{user.workingAt}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Research Interest:</span>
            <span className={styles.rightbarInfoValue}>Application of Quantum Computers</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Looking for:</span>
            <span className={styles.rightbarInfoValue}>{user.lookingFor}</span>
          </div>
        </div>
             <h4 className={styles.rightbarTitle}>{user.name}'s  Connections</h4>
        <div className={styles.rightbarFollowings}>
          {connections.map((connection) =>  (
                <Link to={"/userProfile/"+connection.name}style={{textDecoration:"none"}}>         
             <div className={styles.rightbarFollowing}>
            <img
            src={ connection.profilePicture ? PF + connection.profilePicture :  PF+"person/noAvatar.png"}
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName} > {connection.name} </span>
          </div>
          </Link>
          ))};
        </div>
            </>
            )
    }
    return (
        <div className={styles.rightbar}>
            <div className={styles.rightbarWrapper}>
               {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
