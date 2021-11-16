import UsersDAO from "../dao/usersDAO.js"
import verifyPassword from "../security/verifyPassword.js"

export default class UsersController {

  static async createUser(req, res) {
    try {
      const userInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
      }

      const UsersResponse = await UsersDAO.addUser(
        userInfo
      )

      // not receiving a response
      if (UsersResponse === "duplicate email") {
      res.json({status: "duplicate email"})
      }
      else {
      res.json({ status: "success" })
      }
      
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

    static async checkLogin(req, res) {

    try {
      const loginInfo = {
        email: req.body.email,
        password: req.body.password,
      }

      // make sure user with email credential exists
      const UserResponse = await UsersDAO.authenticateUser(
        loginInfo
      )
      
      // if email is not valid
      if(UserResponse === null) {
        res.json({ status: "not found" })
      }

      if (UserResponse) {
        let hashedPassword = UserResponse.password;    // password in DB

        // verify that user entered password matches account password
        const match = await verifyPassword.checkMatch(loginInfo.password, hashedPassword)

        // if passwords match
        if (match) {
          res.json({ status: "success", user_id: UserResponse._id})

          console.log(match)
        }

        // if password not valid
        else {
          res.json({ status: "not found" })
        }

      }
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  } 

}
