import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{},
    },

},{minimize:false})

// const userModel = mongoose.models.user || mongoose.model('user', userSchema)
const userModel = mongoose.models.user || mongoose.model('user', userSchema)


export default userModel;





// import mongoose from "mongoose";

// // create user Schema
// const userSchema = new mongoose.Schema({
//     // in this we will define the property of the user.
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     cartData:{
//         type:Object,
//         default:{},
//     },
// }, {minimize:false})


// // create model
// const userModel = mongoose.models.user || mongoose.model('user', userSchema)

// export default userModel;