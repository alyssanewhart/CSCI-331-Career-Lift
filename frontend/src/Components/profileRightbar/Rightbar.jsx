import styles from "./Rightbar.module.css"
import { StarOutline } from "@material-ui/icons"

export default function rightbar({userProfile}) {

    const HomeRightBar = () =>{
        return (
            <>
            <div className={styles.rightbarTop}>
                    <div className={styles.rightbarTopTitle}>
                        <StarOutline className={styles.featuredStart}/>
                        <span className={styles.featuredText}><b>Featured Posts</b></span>   
                    </div>
                    <div className={styles.featuredPostList}>
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/post/8.jpeg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>Softawre Engineering Intern Summer 2022</span>
                            </div>
                            <div className={styles.featuredPostItemBottom}>
                                <span className={styles.featuredPostTimeText}>19 hours ago</span>
                                <span className={styles.featuredPostTimeText}>onXmaps</span>
                                <span className={styles.featuredPostTimeText}>Bozeman, Montana</span>
                            </div>
                        </div>
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/post/8.jpeg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>Softawre Engineering Intern Summer 2022</span>
                            </div>
                            <div className={styles.featuredPostItemBottom}>
                                <span className={styles.featuredPostTimeText}>19 hours ago</span>
                                <span className={styles.featuredPostTimeText}>onXmaps</span>
                                <span className={styles.featuredPostTimeText}>Bozeman, Montana</span>
                            </div>
                        </div>
                        <div className={styles.featuredPostItem}>
                            <div className={styles.featuredPostItemTop}>
                                <img src="/assets/post/8.jpeg" className={styles.featuredPostImg} alt=""/>
                                <span className={styles.featuredPostText}>Softawre Engineering Intern Summer 2022</span>
                            </div>
                            <div className={styles.featuredPostItemBottom}>
                                <span className={styles.featuredPostTimeText}>19 hours ago</span>
                                <span className={styles.featuredPostTimeText}>onXmaps</span>
                                <span className={styles.featuredPostTimeText}>Bozeman, Montana</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                            <button className={styles.featuredPostButton}>Show more</button>
                    </div>
                </div>
                <h4 className={styles.rightbarBottomTitle}>My Network</h4>
                <ul className={styles.rightbarConnectionList}>
                    <li className={styles.rightbarConnection}>
                        <div className={styles.rightbarImgContainer}>
                            <img className={styles.rightbarProfileImg} src="/assets/person/3.jpeg" alt=""/>
                            <span className={styles.rightbaronlineBadge}></span>
                        </div>
                        <span className={styles.rightbarUserName}>Abebech Gobena</span>
                    </li>
                    <li className={styles.rightbarConnection}>
                        <div className={styles.rightbarImgContainer}>
                            <img className={styles.rightbarProfileImg} src="/assets/person/3.jpeg" alt=""/>
                            <span className={styles.rightbaronlineBadge}></span>
                        </div>
                        <span className={styles.rightbarUserName}>Abebech Gobena</span>
                    </li>
                    <li className={styles.rightbarConnection}>
                        <div className={styles.rightbarImgContainer}>
                            <img className={styles.rightbarProfileImg} src="/assets/person/3.jpeg" alt=""/>
                            <span className={styles.rightbaronlineBadge}></span>
                        </div>
                        <span className={styles.rightbarUserName}>Abebech Gobena</span>
                    </li>
                    <li className={styles.rightbarConnection}>
                        <div className={styles.rightbarImgContainer}>
                            <img className={styles.rightbarProfileImg} src="/assets/person/3.jpeg" alt=""/>
                            <span className={styles.rightbaronlineBadge}></span>
                        </div>
                        <span className={styles.rightbarUserName}>Abebech Gobena</span>
                    </li>
                </ul>
            </>
        )
    }

    const ProfileRightBar = () =>{
        return (
            <>
            <h4 className={styles.rightbarTitle}>Nelson's Information</h4>
            <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Currently Working at:</span>
            <span className={styles.rightbarInfoValue}>Google</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Research Interest:</span>
            <span className={styles.rightbarInfoValue}>Application of Quantum Computers</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Looking for:</span>
            <span className={styles.rightbarInfoValue}>Mentoring and Recruiting Undergrads</span>
          </div>
        </div>
             <h4 className={styles.rightbarTitle}>Your Common Connections</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Cena</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/7.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Albert Ejer</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Scot Mctominay</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Bruno Fernandes</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Getaneh Kebede</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/8.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Abiy Ahmed</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Scarlet Johanssen</span>
          </div>
        </div>
            </>
            )
    }
    return (
        <div className={styles.rightbar}>
            <div className={styles.rightbarWrapper}>
               {userProfile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
