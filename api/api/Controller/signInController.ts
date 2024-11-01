import express,{Router,Request,Response, NextFunction} from 'express'
import { userModel } from './userSchema'
import bcrypt from  'bcrypt'
import dotenv from 'dotenv'
import jsonwebtoken from 'jsonwebtoken'
const route=express.Router()
dotenv.config({ path: './config/.env' })

const {SECRET_KEY}=process.env
const encodeToken=(userName:string)=>{
    const payload={name:userName}
    let tk;
    if(SECRET_KEY){
         tk=jsonwebtoken.sign(payload,SECRET_KEY,{expiresIn:'1h'})

    }
    return tk
}
export const checkIFFilled=(req:Request,res:Response,next:NextFunction)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(401).send({message:'fill the forms'})
    }
    next()
    }
export const routers=route.post('/login',checkIFFilled, async (req,res)=>{


const {email,password}=req.body;

try {
//use email to find username and after use it to encode the token  
const data=await userModel.find({email:email})

const getResponse= data
// console.log(getResponse)
// console.log(SECRET_KEY)
if(getResponse.length < 1){
 res.status(401).send({message:"user not found"})
  
}

 else{ 
    console.log(data)
    const dataFind=getResponse.map((content)=>content.name)
   
    const changeString=dataFind.toString()
    // console.log(changeString)
    const encodeds =    encodeToken(changeString)
    
 const getData=data.map(content=> content.password)
 const hashedPass=getData.toString()
 //if i access the cart page the token gets decoded 
 const comparePassword=await bcrypt.compare(password,hashedPass)
    if(comparePassword){
     res.status(200).send({message:'password matches',token:encodeds,userName:changeString})}
     else{
        res.status(400).send({message:'invalid password'})
    }
 }


// res.status(200).send(getResponse)
// console.log(getResponse)
} catch (error) {
    console.log(error)
}


})


