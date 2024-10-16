import express,{Request,Response,Router} from 'express'
import { authenticated } from '../Middlewares/authenticated'

const router=Router()

export const cartRouter= router.post('/carts',authenticated,async (req:Request,res:Response)=>{
console.log(req.body)


}).get('/carts',(req,res)=>{

})


