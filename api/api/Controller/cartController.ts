import express,{Request,Response,Router} from 'express'
import { authenticated } from '../Middlewares/authenticated'
import { userModel } from './userSchema'

const router=Router()

export const cartRouter= router.post('/carts',authenticated,async (req:Request,res:Response)=>{
console.log(req.body)
try {
    
 const data=await userModel.findOneAndUpdate({
    email:req.body
  })
data  &&   console.log(data)
} catch (error) {
    console.log(error)
}

}).get('/carts',(req,res)=>{

})


