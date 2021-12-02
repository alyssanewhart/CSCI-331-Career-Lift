const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conversation

router.post("/", async (req, res) => {
    const newConversation = new Conversation({
        members:[req.body.senderId, req.body.receiverId]
    });
    console.log(newConversation)
    try{
        const saveConversation = await newConversation.save();
        res.status(200).json(saveConversation)

    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//getting conversation of a user

router.get("/:userId", async (req, res) => {
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
