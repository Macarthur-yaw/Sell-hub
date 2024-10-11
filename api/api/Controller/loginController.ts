import express,{Router} from 'express'
import { userModel } from './userSchema'
import bcrypt from 'bcrypt'
const route=express.Router()

const hashedPassword=async (pass:string)=>{
    
    const saltRounds=10
const saltss=  await bcrypt.genSalt(saltRounds)
const hashedPasswords=await bcrypt.hash(pass,saltss)
return hashedPasswords
 
   
}

export const signup=route.post('/',async (req,res)=>{
   let getDatas;
    if(!req.body){
        res.status(400).send({mesage:'Bad error'})
    } else{

        const{name,email,password}=req.body
const findIfTheres=await userModel.find({email:email})
if(findIfTheres.length >0){
res.status(400).send({message:'An account with this information already exists'})
}
else {
        if(password){
            hashedPassword(password)

             getDatas=await hashedPassword(password)
        
        }


        try {
            const getData=new userModel({
               name:name,
               email:email,
               password:getDatas
            })   
            await getData.save()
           res.status(201).send({message:'saved successfully'})
           } catch (error) {
             res.status(500).send({message:'Can not be saved'})
             
           }
    }
    }


})