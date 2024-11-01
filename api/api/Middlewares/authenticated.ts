import { Request,Response,NextFunction } from "express"
import dotenv from 'dotenv'
import jsonwebtoken  from 'jsonwebtoken'
dotenv.config({ path: './config/.env' });
const {SECRET_KEY}=process.env
const decodeToken=async (tokenValue:string)=>{
   

try {

    let tokens;

    if(SECRET_KEY){
        if(tokenValue){
            const results=await jsonwebtoken.verify(tokenValue,SECRET_KEY)
            tokens=results
        }
    }
return tokens
    // console.log(tokens)
} catch (error) {
    console.log(error)
}
}

type payLoad={
    name:string,
    iat:number,
    exp:number
}
export const authenticated=async (req:Request,res:Response,next:NextFunction)=>{


    const getTokens=req.headers.authorization
    // console.log(getTokens)
    const changedGetTokens=getTokens?.split(" ")[1]
    // const [1]=changedGetTokens
    // console.log(changedGetTokens)
    if(changedGetTokens){
       const name=await decodeToken(changedGetTokens)
    if(name){
       const decodedToken= name as payLoad
// decodedToken &&  req.body = decodedToken.name
if(decodedToken){
    req.body=decodedToken.name
}
    
     
    }
    }
   
if(!getTokens){
    res.status(500).send({message:'you didnt include the token'})
}else{
    next()

}
}