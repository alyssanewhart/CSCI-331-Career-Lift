import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
import encryptPassword from "../security/encryptPassword.js"

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
      // check if email already in use
      users.findOne({ email: user.email }).then(async existingUser => {
        if (existingUser) {
          return res.status(400).json({ email: "Email already exists" });
        } else {
          
      user.password = await encryptPassword.encrypt(user.password)      // encrypt password

      const userDoc = {                   // create new user document
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        userType: user.userType
        }

      return await users.insertOne(userDoc)   // insert document into DB
    }
    }) 

   } catch (e) {
      console.error(`Unable to create user: ${e}`)
      return { error: e }
    }
  }

  // Unfinished 
  static async checkUser(user) {
    try {
      const usersDoc = { 
        email: user.email,
        password: user.password,
        }

        /*
        // Print all documents in the collection
        console.log(users.find({ email: usersDoc.email }).toArray()
        .then(items => {
          items.forEach(console.log)
        })
        )  */

      return await users.findOne({ email: usersDoc.email })
    } catch (e) {
      console.error(`Unable to find user: ${e}`)
      return { error: e }
    }
  }

   
}
