import express from "express"
import File from "../models/file.js";
//import multer from "multer";
import fileUpload from "express-fileupload";

const router = express.Router();

router.route("/").get((req,res) => res.send("hello world"))

/*const storage = multer.diskStorage({
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
       console.log("Request file ---", req.body.file); //Here you get file.
       const file = new File();
       file.meta_data = req.file;
       file.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })
       /*Now do where ever you want to do*/
  //  });
 //} 
 
 router.post("/upload", async(req, res) =>{
  const file = req.files.file;
  const filename = file.name;

  console.log(file)
  console.log(filename)

  const profileImage = new File();
  profileImage.image = file;
  profileImage.save().then(()=>{
   res.send({message:"uploaded successfully"})
   })
});

export default router;