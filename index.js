const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const multer = require("multer");

const path = require("path")

dotenv.config();


mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(morgan("common"));

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
})

const upload = multer({storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
  try{
    return res.status(200).json("Uploaded");
  }catch(err){
    console.log(err);
  }
})




// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.resolve(__dirname, './frontend/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
//   });
  
// }


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

const PORT = process.env.PORT;

app.listen(PORT || 8800, () => {
  console.log(`Backend server is running on ${PORT}`);
});
