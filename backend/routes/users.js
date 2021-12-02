const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update-User
router.put("/:id", async(req, res) =>{
  if(req.body.userId === req.params.id || req.body.isAdmin){
      console.log("true")
      console.log(req.params.id)
      console.log(req.body)
      // for updatig Password and using bcrypt again
      if(req.body.password){
          try{
              const salt = await bcrypt.genSalt(10);
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
          console.log(user)

          res.status(200).json("success")
      }catch(err){
          res.status(500).json(err);
      }
  }else{
      res.status(404).json("You can't update this account")
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const name = req.query.name;
  try {
    const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({name:name})
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json({err :"User not Found"});
  }
});


//Getting User by ID if neccessary
//
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id) 
//     const { password, updatedAt, ...other } = user._doc;
//     res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json({err :"User not Found"});
//   }
// });




//follow a user

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow a user

router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you dont follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant unfollow yourself");
    }
  });

  //get connections

  router.get("/connections/:userId", async (req, res) =>{

    try{

      const user = await User.findById(req.params.userId);
      const userConnection = await Promise.all(
        user.followings.map((connectionId) => {
          return User.findById(connectionId)
        })
      )

      let connectionList = [];
      userConnection.map((connection) =>{
        const {_id, name, profilePicture} = connection;
        connectionList.push({_id, name, profilePicture})
      })
      res.status(200).json(connectionList)

    }catch(err){

      res.status(500).json(err)
    }


  })

module.exports = router;
