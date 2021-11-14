import styles from'./ProfileTopbar.module.css'
import { Search, Person, Chat, Notifications, Home, PeopleAlt, Work, Message } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.topbarLeft}>
                 <div className={styles.searchbar}>
                <Search className={styles.searchIcon} />
                <input placeholder="Search for a job, mentor, forum,  or a friend" className={styles.searchInput}/>
                </div>
                
            </div>
            <div className={styles.topbarCenter}>
               <span className={styles.logo}>CareerLift</span>
            </div>
            <div className={styles.topbarRight}>
                {/* <div className="topbarLinks">
                <span className="topbarLink"> <Home className="topbarIcons"/>Homepage</span>
                <span className="topbarLink"><PeopleAlt className="topbarIcons"/>Connections</span>
                 <span className="topbarLink"><i class="fas fa-chalkboard-teacher topbarIcons"></i> Mentor</span>
                <span className="topbarLink"><Work className="topbarIcons"/>Connections</span>
                <span className="topbarLink"><Message className="topbarIcons"/>Messages</span>
                <span className="topbarLink"><Notifications className="topbarIcons"/>Notifications</span>
                <span className="topbarLink"><Work className="topbarIcons"/>Connections</span> 
                </div> */}
                <div className={styles.topbarIcons}>
                    <div className={styles.topbarLinkItem}>
                        <Home className={styles.topbarIconItem}/>
                        <span className={styles.topbarIconText}><Link to="/" className={styles.link}>Home</Link></span>
                    </div>
                    <div className={styles.topbarLinkItem}>
                        <PeopleAlt className={styles.topbarIconItem}/>
                        <span className={styles.topbarIconBadge}>1</span>
                        <span className={styles.topbarIconText}>Connection</span>
                    </div>
                    {/* <div className="topbarLinkItem">
                        <i class="fas fa-chalkboard-teacher topbarIconItem"></i>
                        <span className="topbarIconText">Mentor</span>
                    </div> */}
                    <div className={styles.topbarLinkItem}>
                        <Work className={styles.topbarIconItem}/>
                        <span className={styles.topbarIconBadge}>1</span>
                        <span className={styles.topbarIconText}>Jobs</span>
                    </div>
                    <div className={styles.topbarLinkItem}>
                        <Message className={styles.topbarIconItem}/>
                        <span className={styles.topbarIconBadge}>2</span>
                        <span className={styles.topbarIconText}>Messages</span>
                    </div>
                    <div className={styles.topbarLinkItem}>
                        <Notifications className={styles.topbarIconItem}/>
                        <span className={styles.topbarIconBadge}>1</span>
                        <span className={styles.topbarIconText}>Notifications</span>
                    </div>
                </div>
                
                <img src="/assets/person/1.jpeg" alt="" className={styles.topbarImg}/>
                 
            </div>
        </div>
       
         
           
  


    );
}
