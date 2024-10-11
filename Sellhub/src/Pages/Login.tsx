import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

export default function Login(){
    const navigate=useNavigate()
    return (
<div>
<div 
onClick={()=>navigate(-1)}
className='mt-6 p-2 text-2xl'>
    <ArrowBackIcon 
    
    sx={{fontSize:'35px'}}/>
</div>
        <div className="flex flex-col gap-2  px-6  mt-10">
           
           
            <span className="text-center flex flex-col justify-between gap-4 mb-2 ">
                <h1 className="font-semibold tracking-wider text-3xl">
                    Welcome to Sellhub
                </h1>
                <h2 className="text-slate-800 text-lg  tracking-normal max-w-sm mx-auto ">
                    Type your email or phone number to log in or create a Sellhub account.
                </h2>
                </span>

                <span className="flex  flex-col justify-center gap-10 pt-6">
                    <input type="text" className="border-[1px] p-4 rounded  " placeholder="Email or Mobile Number"/>

                    <button className="bg-black  rounded  border-black text-white p-2 text-xl font-medium tracking-widest shadow-md">Continue</button>
                </span>

                <span className="text-sm md:text-lg text-center">
                    By continuing you agree to Sell
                    <br/>
                    <a href="" className="underline underline-offset-2">Terms and conditions</a>
                    </span>

                    <div className="flex flex-col  gap-8 pt-10">
                        <button className="bg-sky-700 p-2 inline-flex  justify-center items-center gap-2 rounded border-slate-500 font-medium text-xl text-white shadow-md">
                          
                            Sign in with Google
                            <GoogleIcon/>
                            </button>
                        <button className="bg-black inline-flex justify-center gap-6  p-2 text-xl rounded font-medium border-black text-white shadow-md">
                            
                            Sign in with Apple
                            <AppleIcon/>
                            </button>
                    </div>

                    <span className=" text-center pt-10 flex-1  flex flex-col justify-center  ">
                        <h1 className="mb-2 font-medium text-sm md:text-md">For further support, you may visit the Help center or contact our customer service team.</h1>
                        <h2 className="font-semibold mt-6 text-lg ">SellHub &copy; 2023</h2>
                    </span>
        </div></div>

    )
}