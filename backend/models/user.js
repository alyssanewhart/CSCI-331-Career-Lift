import mongoose from "mongoose";


const UserSchema =  new mongoose.Schema({
        name:{
            type:String,
            required:true,
            min:3,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            max:50, 
            unique:true,

        }, 
        password:{
            type:String,
            min:8,
            required:true,
        },

        profilePicture:{
            type:String,
            default:""
        },
        coverPicture:{
            type:String,
            default:""
        },
        followers:{
            type:Array,
            default:[]
        },
        following:{
            type:Array,
            default:[]
        },
        isAdmin:{
            type:Boolean,
            default:false
        },

        desc:{
            type:String, 
            max:80

        },

        status:{
            type:String,
            //default:["Student", "Alumni", "Proffessor"],
            enum:[1,2,3]
        }, 
        
        classOf:{
            type:String,
            //DATE
        },

        userType: {
            type:String,
        }


        

},

{timestamps:true}
);

export default mongoose.model("User", UserSchema);

