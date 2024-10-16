import mongoose from 'mongoose'

const connectDB=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log('mongoDB is connected');
        
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/partliputra`)
}

export default connectDB;

