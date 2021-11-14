import React from 'react'
import Topbar from "../profileTopbar/Topbar"
import Feed from "../profileFeed/Feed"
import Leftbar from "../profileLeftbar/Leftbar"
import Rightbar from "../profileRightbar/Rightbar"
import styles from "./profile.module.css"

export default function profile() {
    return (
        <>
      <Topbar/>
      <div className={styles.profileContainer}>
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
      </>
    )
}
