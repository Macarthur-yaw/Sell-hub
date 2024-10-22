import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react';
import axios,{AxiosError} from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';

type FormValues={
 email:string ,
 password:string 
}
type ResponseData={
  message:string,
  token:string,
  userName:string
}
export default function Login() {
  const navigate = useNavigate();
 const[next ,setNext]=useState(false)
const [loading,setLoading]=useState(false)
  const {register,handleSubmit,formState:{errors},watch,setError,clearErrors}=useForm<FormValues>()
  // const[message,setMessage]=useState('')
 const[errorr,setErrorr]=useState('')
  const handleNext=()=>{
    const email=watch('email')

    const checkPatterns=/^\S+@\S*/
    if(email.length>5 && email.match(checkPatterns)){
      setNext(true)  
      clearErrors('email')
    } 
   else{
    
    setError('email',{type:'custom',message:'Email is not valid'},{shouldFocus:true})
    setNext(false) 
  }
  }



  const onSubmit=async (data:FormValues)=>{
console.log(data)


setLoading(true)
try {
  const url='http://localhost:3000/login'
  // const url='localhost:3000/signup'
  
 const response=await  axios.post(url,data)
 console.log(response.data?.username)
  const dataResponse:unknown = response.data
  console.log(dataResponse) 
  const changeType=dataResponse as  ResponseData
if(changeType.userName){
  localStorage.setItem('userName',JSON.stringify(changeType.userName))

}
// console.log(changeType.userName)
  // console.log(data)
setLoading(false)
navigate('/')
// console.log(dataResponse)


 
} catch (err) {
  // console.log(error.)
 
  setLoading(false)
  if(err instanceof AxiosError){
    
    // console.log(err.response.data.message)
console.log(err.message)  
if(err.response?.data){
setErrorr(err.response.data.message)
}
}
}
  }

  const onError=()=>{
    console.log('error')
  }

  useEffect(()=>{

  },)
  return (
    <div className="h-screen w-full flex flex-col bg-gray-50">
      
   
      <div 
        onClick={() => navigate(-1)} 
        className='mt-6 p-2 text-2xl cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-full w-fit ml-4'
      >
        <ArrowBackIcon sx={{ fontSize: '35px' }} />
      </div>

      <div className="flex flex-col gap-6 px-6 mt-10 mx-auto w-full">

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
            className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit,onError)}>
<span className='flex flex-col gap-1 pl-2'>
            <input 
            {...register("email",{required:{

              value:true,
              message:'Email is required'
            },
          pattern:{
            value:/^\S+@\S*/,
            message:"Email is not a valid email"
          }
          })} 
            className={`${next ? 'hidden':'block'} border-[1px] w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out`}
            placeholder="Email or Mobile Number" 
          />
{
  errors.email && (
    <span className={`${next && 'hidden'}`}>
      {errors.email.message}
    </span>
  )
}
</span>

 {
    next && (

<div className='flex flex-col gap-6'>

<input 
            {...register("password",{
              required:{
                value:true,
                message:'Password field is required'
              },
              pattern:{
                value:/^[A-Z]\w/,
                message:'Password must be alphanumeric'
              }
            })} 
            className={`${next ?'hidden':'block'}border-[1px] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out`}
            placeholder="Password" 
            type='password'
          />
          {
            errors.password && (
              errors.password.message
            )
          }


<input type='submit' value='Submit' className={`${loading && 'hidden'} border-[1px] bg-black text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out font-medium text-md`}/>
{
  loading && (
    <Box sx={{ display: 'flex',justifyContent:'center' }}>
      <CircularProgress />
    </Box>
  )
}

{/* { 
  message && (
    <div className='text-center uppercase'>
      <h1>{message}</h1>
      </div>
  )
} */}
{ 
  errorr && (
    <Alert
    
    severity="error">
 {errorr}
  </Alert>
  )
}


</div>

       
    )
 }
        

            </form>
       
            <button onClick={handleNext} className={`${next ? 'hidden':'block'}     bg-black rounded-lg text-white p-3 text-xl font-semibold tracking-widest shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out`}>
Proceed
</button>
          
        <span className='text-center'>
          You don't have an account? <Link to='/signup' className='underline underline-offset-2'>Sign up</Link>
        </span>
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
