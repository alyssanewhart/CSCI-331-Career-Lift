import mongoose from "mongoose";


const UserSchema =  new mongoose.Schema({
    
        name:{
            type:String,
            required:true,
            min:3,
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

        followers: {
            type: Array,
            default: [],
          },
          followings: {
            type: Array,
            default: [],
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
        
        jobTitle: {
            type: String,
        },

        careerInterest: {
            type: String,
        },

        company: {
            type: String,
        },

        lookingFor: {
            type: String,
        },


        classOf:{
            type:String,
        },

        userType: {
            type:String,
        }
},

{timestamps:true}
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

//export default mongoose.model("User", UserSchema);
export default User;