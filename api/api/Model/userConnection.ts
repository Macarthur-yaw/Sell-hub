import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({ path: './config/.env' });


const {CONNECTION_URL}=process.env


export const connection=async( )=>{
    try {
 if(CONNECTION_URL){
    await mongoose.connect(CONNECTION_URL)
    
 }
        
            console.log("connected")
    } catch (error) {
        console.log(error)
        console.log('cant connect')
    }
}

// connection()