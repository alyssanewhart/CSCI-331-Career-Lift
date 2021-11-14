import styles from "./share.module.css"
import {PermMedia, Label,Room,Attachment, EmojiEmotions} from "@material-ui/icons"

export default function share() {
    return (
        <div className={styles.share}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img className={styles.shareProfileImg} src="/assets/person/1.jpeg" alt=""/>
                    <input placeholder="Make a public post, connect with others." className={styles.shareInput}/>
                </div>
                <hr className={styles.shareHr}/>
                <div className={styles.shareBottom}>
                    <div className={styles.shareOptions}>
                        <div className={styles.shareOption}>
                             <PermMedia  htmlColor="tomato" className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>Photo or Video</span>
                        </div>
                        <div className={styles.shareOption}>
                             <Label  htmlColor="tomato" className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>Tag</span>
                        </div>
                        <div className={styles.shareOption}>
                             <Room  htmlColor="tomato" className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>Location</span>
                        </div>
                        <div className={styles.shareOption}>
                             <Attachment   htmlColor="tomato" className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>File</span>
                        </div>
                    </div>
                    <button className={styles.shareButton}>Share</button>
                </div>
            </div>
            
        </div>
    )
}
