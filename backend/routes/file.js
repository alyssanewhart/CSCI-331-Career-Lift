import express from "express"
import File from "../models/file.js";
import bcyrpt from "bcrypt";
import multer from "multer";

const router = express.Router();

router.route("/").get((req,res) => res.send("hello world"))

const storage = multer.diskStorage({
    destination: "./public/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myfile");
 
 const obj = (req,res) => {
     console.log(req )
    upload(req, res, () => {
       console.log("Request ---", req.body);
       console.log("Request file ---", req.file); //Here you get file.
       const file = new File();
       file.meta_data = req.file;
       file.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })
       /*Now do where ever you want to do*/
    });
 }
 
 router.post("/upload", obj);

export default router;