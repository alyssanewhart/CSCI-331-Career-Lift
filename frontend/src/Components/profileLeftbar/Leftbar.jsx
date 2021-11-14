import styles from"./Leftbar.module.css"
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmarks,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons"; 

export default function leftbar() {
    return (
        <div className={styles.leftbar}>
           <div className={styles.leftbarWrapper}>
                <ul className={styles.leftbarList}>
                    <li className={styles.leftbarListItem}>
                        <RssFeed className={styles.leftbarIcon}/>
                        <span className={styles.leftbarListItemText}>Feed</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <Chat className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Messages</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <PlayCircleFilledOutlined className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Videos</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <Group className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Groups</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <Bookmarks className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Bookmarks</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <HelpOutline className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Questions</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <WorkOutline className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Jobs</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <Event className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Events</span>
                    </li>
                    <li className={styles.leftbarListItem}>
                        <School className={styles.leftbarIcon} />
                        <span className={styles.leftbarListItemText}>Courses</span>
                    </li>
                </ul>
                <button className={styles.leftbarButton}>Show More</button>
                <hr className={styles.leftbarHr} />
                <ul className={styles.leftbarConnectionList}>
                    <li className={styles.leftbarConnection}>
                        <img className={styles.leftbarConnectionImg} src="/assets/person/4.jpeg" alt=""/>
                        <span className={styles.leftbarConnectionName}>Jessica Jackson</span>
                    </li>
                    <li className={styles.leftbarConnection}>
                        <img className={styles.leftbarConnectionImg} src="/assets/person/6.jpeg" alt=""/>
                        <span className={styles.leftbarConnectionName}>Dr.Jhon Richards</span>
                    </li>
                    <li className={styles.leftbarConnection}>
                        <img className={styles.leftbarConnectionImg} src="/assets/person/5.jpeg" alt=""/>
                        <span className={styles.leftbarConnectionName}>Dr.Abebe Cody</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
