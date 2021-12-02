import styles from './Conversation.module.css'

export default function Conversation() {
    return (
        <div className={styles.conversation}>
            <img className={styles.conversationImg} src="https://i.pinimg.com/originals/5e/64/ed/5e64ed9296356ae037fea59531648269.jpg"/>
            <span className={styles.conversationName}>Merry Libsekal</span>
        </div>
    )
}
