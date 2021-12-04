const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const nothing = "nothing";
// Sign Up Route
router.post("/signup", async (req, res)=> {
    
    // check if email already in use
    try {
        let existingUser = await User.findOne({ email: req.body.email })

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
            const newUser =  new User({ 
                name: name, 
                email:req.body.email,
                password: hashedPassword,
                userType: req.body.userType,
                profilePicture: req.body.profilePicture,
                coverPicture: req.body.coverPicture,
            }); 

            // Add new user to DB
            try {
                const savedUser = await newUser.save();
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

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
