import mongoose from "mongoose";
//lMTguBonFvP4n3jW

export const connectDB = async() => {
try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}
catch (error)
{
    console.log('Error');
    process.exit(1);
}
};