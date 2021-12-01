import express from "express";
import fileUpload from "express-fileupload";

const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";


import  userRoute from "./routes/users.js";
import  authRoute from "./routes/auth.js";
import  fileRoute from "./routes/file.js";
import  postRoute from "./routes/posts.js";

// expresss-fileupload
app.use(fileUpload());
app.use(express.static("files"));

dotenv.config();

mongoose.connect(
    process.env.MongoDB_URL,
     {useNewUrlParser: true,
      useUnifiedTopology: true },
     () => {
    console.log("Connected to MongoDB")
});

//mildware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


//routes

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/file", fileRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () =>{
    console.log("Server is running")
})