import mongoose from "mongoose";


const FileSchema =  new mongoose.Schema({
    meta_data:{}
});

export default mongoose.model("File", FileSchema);

