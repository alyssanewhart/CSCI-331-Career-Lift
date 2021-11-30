import styles from "./closeNetwork.module.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export default function closeNetwork({user}) {
  return (
    <li className={styles.sidebarFriend}>
      <img className={styles.sidebarFriendImg} src={PF+user.profilePicture} alt="" />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}