import {Schema,model} from "mongoose";
interface user {
name:string,
password:string,
email:string 
}
const userSchema=new Schema<user>({
    name:{
        type:String
      
    },
    email:{
type:String
    },
    password:{
        type:String
 
    }
})

export const userModel=model('user',userSchema);