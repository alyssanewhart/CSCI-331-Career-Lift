import express from "express"
import UsersCtrl from "./users.controller.js"

const router = express.Router()

router.route("/").get((req, res) => res.send("Hello World"))            // make sure server connected and running 


router
  .route("/user")
  .post(UsersCtrl.apiPostUser)


export default router