import { response } from "express"
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
import encryptPassword from "../security/encryptPassword.js"
import verifyEmail from "../security/verifyEmail.js"

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

  // add user to DB
  static async addUser(user) {
      // check if email already in use
      try {
      let existing = false;
      let existingUser = await users.findOne({ email: user.email })

      if (existingUser) {
          existing = true;
        } 
        else {
          
      user.password = await encryptPassword.encrypt(user.password)      // encrypt password
      
      // need to alert frontend
     

      const userDoc = {                   // create new user document
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        userType: user.userType
        }
      
      return await users.insertOne(userDoc)   // insert document into DB

    // need a better way to handle an already in use email input
  }
  if (existing)
  return "duplicate email"

}
catch(e) {
      console.error(`Unable to create user: ${e}`)
      return { error: e }
}
  
}



   
  
  // } catch (e) {
   //   console.error(`Unable to create user: ${e}`)
  //    return { error: e }
    
  

  // authenticate user in DB
  static async authenticateUser(user) {
    try {
      const userDoc = { 
        email: user.email,
        password: user.password,
        }

        /*console.log(users.find({ email: userDoc.email,  }).toArray()
        .then(items => {
          items.forEach(console.log)
        })
        )  */

      return await users.findOne({ email: userDoc.email }) // check for user with matching email in DB
    } catch (e) {
      console.error(`Unable to find user: ${e}`)
      return { error: e }
    }
  }

   
}
