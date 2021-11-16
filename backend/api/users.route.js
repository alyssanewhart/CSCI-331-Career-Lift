import express from "express"
import UsersCtrl from "./users.controller.js"

const router = express.Router()

router.route("/").get((req, res) => res.send("Hello World"))            // make sure server connected and running 


router
  .route("/signup")
  .post(UsersCtrl.createUser)

router
  .route("/login")
  .post(UsersCtrl.checkLogin)
  


export default router