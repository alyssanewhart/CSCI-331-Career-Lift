import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let users

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (users) {
      return
    }
    try {
      users = await conn.db(process.env.CSCI331_NS).collection("users")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addUser(user) {
    try {
      const usersDoc = { 
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        userType: user.userType
        }

      return await users.insertOne(usersDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }
}