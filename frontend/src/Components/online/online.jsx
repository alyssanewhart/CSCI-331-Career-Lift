import styles from "./online.module.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({user}) {
  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileImgContainer}>
        <img className={styles.rightbarProfileImg} src={PF+user.profilePicture} alt="" />
        <span className={styles.rightbarOnline}></span>
      </div>
      <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
  );
}