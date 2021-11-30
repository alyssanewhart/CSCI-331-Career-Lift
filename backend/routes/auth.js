import express from "express";
import user from "../models/user.js";
import bcrypt from "bcrypt";
const router = express.Router();

/* router.route("/").get((req,res) => res.send("hello world")) test if connected */

// sign up Route
router.post("/signup", async (req, res)=> {
    
    // check if email already in use
    try {
        let existingUser = await user.findOne({ email: req.body.email })

        // if email already in use 
        if (existingUser) {
            res.json({status: "duplicate email"})
        } 

        else {
            
            // generate hashed password using bcrypt
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            // build name from user's first name and last name
            const name = req.body.firstName + " " + req.body.lastName;

            // create new user
            const newUser =  new user({ 
                name: name, 
                email:req.body.email,
                password: hashedPassword,
                userType: req.body.userType,
                profilePicture: req.body.profilePicture,
                coverPicture: req.body.coverPicture
            }); 

            // Add new user to DB
            try {
                const user = await newUser.save();
                res.status(200).json({ status: "success" })
        
               // catch error adding new user to DB
            }  catch(e) {
            res.status(500).json({ error: e.message })
            }  

        }
        // catch all other errors
        } catch(e) {
        res.status(500).json({ error: e.message })
        }
    })


// login route
router.post("/login", async (req, res)=>{
try{
    // check email
    const validEmail =  await user.findOne({email: req.body.email});

    // check password by hashing with bcrypt and comparing
    const validPassword = await bcrypt.compare(req.body.password, validEmail.password);

    // if either password or email is invalid
    if ((!validPassword) || (!validEmail)) { 
        res.json({status: "invalid login credentials"})  
    } 

    // if valid credentials respond with "success" and user id
    else { 
        res.status(200).json({ status: "success", user: validEmail}) 
        
    }
    
    } catch(e) {
        res.status(500).json(e);
    }
}) 

export default router;