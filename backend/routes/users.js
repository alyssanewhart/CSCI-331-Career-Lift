import express from "express"
import User from "../models/user.js";
import bcyrpt from "bcrypt";


const router = express.Router();

router.route("/").get((req,res) => res.send("hello world"))

//upadte-User

router.put("/:id", async(req, res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        
        // for updatig Password and using bcrypt again
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(15);
                req.body.password =  await bcrypt.hash(req.body.password, salt)
            }catch(err){
                return res.status(500).json(err);
            }
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                //automatically sets all inputs inside the body
                $set:req.body,
            });

            res.status(200).json("Account succesfully Updated")
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(404).json("You can't update this account")
    }
});



//delete-User

router.delete("/:id", async(req, res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account succesfully Deleted")
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You can't delete this account")
    }
});


//search-User

router.get("/:id", async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        //only return the neccessary info, no password, no other info
        const {password, email, isAdmin, createdAt,  updatedAt, ...other} = user._doc;
     
        res.status(200).json(other);

           

    }catch(err){
        res.status(403).json("user doesn't exist")
    }

})


//follow-User

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this account");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow-User

router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { following: req.params.id } });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you don't follow this account");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant unfollow yourself");
    }
  });
 export default router