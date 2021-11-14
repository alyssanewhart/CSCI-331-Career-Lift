import styles from"./feed.module.css"
import Share from "./Share/Share"
import Post from "./Post/Post"

export default function feed() {
    return (
        <div className={styles.feed}>
           <div className={styles.feedWrapper}>
                <Share/> 
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
           </div>
        </div>
    )
}
