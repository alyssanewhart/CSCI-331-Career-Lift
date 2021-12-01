import React from 'react'
import Topbar from "../ProtectedNavbar/ProtectedNavbar"
import Feed from "../Feed/Feed"
import Leftbar from "../Leftbar/Leftbar"
import Rightbar from "../Rightbar/Rightbar"
import styles from "./GeneralFeed.module.css"

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
