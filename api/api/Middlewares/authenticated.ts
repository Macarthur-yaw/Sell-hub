import { Request,Response,NextFunction } from "express"
import dotenv from 'dotenv'
import jsonwebtoken  from 'jsonwebtoken'

type userType={
name:string,
charAt:number,
charEnd:number
}
// dotenv.config('./config/')
dotenv.config({ path: './config/.env' });
const {SECRET_KEY}=process.env
const decodeToken=async (tokenValue:string)=>{
    let tokenss;
    if(SECRET_KEY){
        tokenValue && await jsonwebtoken.verify(tokenValue,SECRET_KEY,(err,user)=>{
        if(user){
const userData=user as userType
tokenss=userData

        }
     
        })
    }
return tokenss    

}
export const authenticated=async (req:Request,res:Response,next:NextFunction)=>{


    const getTokens=req.headers.authorization
    // console.log(getTokens)
    const changedGetTokens=getTokens?.split(" ")[1]
    // const [1]=changedGetTokens
    // console.log(changedGetTokens)
    if(changedGetTokens){
       const name=await decodeToken(changedGetTokens)
       console.log(name)
    }
   
if(!getTokens){
    res.status(500).send({message:'you didnt include the token'})
}else{
    next()

}
}