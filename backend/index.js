import express from "express";

const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";


import  userRoute from "./routes/users.js";
import  authRoute from "./routes/auth.js";
import  fileRoute from "./routes/file.js";


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

app.listen(8800, () =>{
    console.log("Server is running")
})