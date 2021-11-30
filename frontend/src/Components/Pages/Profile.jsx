import React from 'react'
import Leftbar from "../profileLeftbar/Leftbar"
import Rightbar from "../profileRightbar/Rightbar"
import styles from "./profile.module.css"

export default function profile({user}) {
    return (
        <>
      <div className={styles.profileContainer}>
        <Leftbar/>
        <Rightbar user = {user}/>
      </div>
      </>
    )
}
