import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import {useForm} from 'react-hook-form'
import { useState } from 'react';
import axios from 'axios';
export default function Login() {
  const navigate = useNavigate();
 const[next ,setNext]=useState(false)
  const {register,handleSubmit}=useForm()
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
   
      <div 
        onClick={() => navigate(-1)} 
        className='mt-6 p-2 text-2xl cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-full w-fit ml-4'
      >
        <ArrowBackIcon sx={{ fontSize: '35px' }} />
      </div>

      <div className="flex flex-col gap-6 px-6 mt-10 mx-auto max-w-md w-full">

        <div className="text-center flex flex-col justify-between gap-4 mb-6">
          <h1 className="font-bold tracking-wider text-3xl text-gray-900">
            Welcome to Sellhub
          </h1>
          <h2 className="text-gray-600 text-lg tracking-normal max-w-sm mx-auto">
            Type your email or phone number to log in or create a Sellhub account.
          </h2>
        </div>

        
            <form 
            action=''
            className="flex flex-col gap-6" onSubmit={handleSubmit((data)=>{
                const url='https://sell-hub.onrender.com/signup'
            axios.post(url,data).then((response)=>console.log(response.data.message)).catch(error=>console.log(error))
            })}>

            <input 
            {...register("email",{required:true})} 
            className={`${next ? 'hidden':'block'} border-[1px] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out`}
            placeholder="Email or Mobile Number" 
          />


<button onClick={()=>setNext(true)} className={`${next ? 'hidden':'block'}     bg-black rounded-lg text-white p-3 text-xl font-semibold tracking-widest shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out`}>
Proceed
</button>
 {
    next && (

<div className='flex flex-col gap-6'>

<input 
            {...register("password")} 
            className={`${next ?'hidden':'block'}border-[1px] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out`}
            placeholder="Password" 
          />

<input type='submit' value='Submit' className={` border-[1px] bg-black text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out font-medium text-md`}/>

</div>

       
    )
 }
        

            </form>
       

          
        
        <div className="text-center text-sm md:text-lg text-gray-600 mt-4">
          By continuing, you agree to Sellhub's 
          <br />
          <a href="#" className="underline underline-offset-2 hover:text-gray-800 transition duration-300 ease-in-out">
            Terms and conditions
          </a>
        </div>


        <div className="flex flex-col gap-4 mt-8">
          <button className="bg-sky-700 p-3 flex items-center justify-center gap-2 rounded-lg font-semibold text-xl text-white shadow-lg hover:bg-sky-600 transition duration-300 ease-in-out">
            <GoogleIcon />
            Sign in with Google
          </button>

          <button className="bg-black p-3 flex items-center justify-center gap-2 rounded-lg font-semibold text-xl text-white shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out">
            <AppleIcon />
            Sign in with Apple
          </button>
        </div>

    
        <div className="text-center text-sm mt-10 flex flex-col items-center justify-center">
          <p className="text-gray-600">
            For further support, you may visit the Help center or contact our customer service team.
          </p>
          <h2 className="font-semibold text-gray-800 mt-6">
            SellHub &copy; 2023
          </h2>
        </div>
      </div>
    </div>
  );
}
