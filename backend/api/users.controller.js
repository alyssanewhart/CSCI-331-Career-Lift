import UsersDAO from "../dao/usersDAO.js"

export default class UsersController {
  static async apiPostUser(req, res, next) {
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
      
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

}
