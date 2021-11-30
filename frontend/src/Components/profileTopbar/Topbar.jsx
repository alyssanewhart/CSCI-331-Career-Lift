import styles from'./ProfileTopbar.module.css'
import { Search, Person, Chat, Notifications, Home, PeopleAlt, Work, Message } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext)
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.topbarLeft}>
                 <div className={styles.searchbar}>
                <Search className={styles.searchIcon} />
                <input placeholder="Search for a job, mentor, forum,  or a friend" className={styles.searchInput}/>
                </div>
                
            </div>
            <div className={styles.topbarCenter}>
                {/* add styling here */}
                <Link to="/" >
               <span className={styles.logo}>New Navbar here</span>
                </Link>            
            </div>
            <div className={styles.topbarRight}>
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
                <Link to={`/userProfile/${user.name}`}>
                <img src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" className={styles.topbarImg}/>
                 </Link>
            </div>
        </div>
       
          
           
  


    );
}
