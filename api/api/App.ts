import express from 'express'
import dotenv from 'dotenv'

import cors from 'cors'
import { routers } from './Controller/signInController'
import { connection } from './Model/userConnection'
import { signup } from './Controller/loginController'
import { cartRouter } from './Controller/cartController'



connection()


const app=express()
app.use(express.json())
app.use(cors())
app.use('/signup',signup)
app.use('/',routers)
app.use('/',cartRouter)
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000,()=>{
    console.log('listening to this server')
}
)