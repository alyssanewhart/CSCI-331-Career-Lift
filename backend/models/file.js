import mongoose from "mongoose";


const FileSchema =  new mongoose.Schema({
    image:{}
});

export default mongoose.model("File", FileSchema);

