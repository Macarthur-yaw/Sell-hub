// import { useState } from "react"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
export default function CheckOut(){
    // const[datas,setDatas]=useState([])
// const [nums,setNums]=useState([])
//     useEffect(()=>{
// const url='https://restcountries.com/v3.1'
// // const urld='https://restcountries.com/v3.1/currency/'
// const fetchData=async (url:string)=>{
//     const getData=await fetch(`${url}/all`)
//     const data=await getData.json()
    
// if(data){
//     setDatas(data.map((country: { name: { common: any } }) => country.name.common));
// }
// }

// fetchData(url)

// const fetchCodes=async (url:string)=>{
//     const getData=await fetch(`${url}/alpha/cca2`)

//     const dataDone=await getData.json()
//     if(dataDone){
//         setNums(dataDone)
//     }
// }
// fetchCodes(url)

// // console.log(datas)
//     },[])
// console.log(datas)
//  console.log(nums)
    return (
        <div className="p-1">
            <section>

            </section>

            <section className=" mt-10 ">
                <span className="pt-4">
<h1 className="px-3 font-medium text-2xl">

Checkout
    
</h1>
               
                </span>
                <form className="flex flex-col gap-2 p-2">

                    <p className='text-lg font-semibold mt-4'>Shipping information</p>
                    {/* <select className="border-[1px] p-1 rounded w-[40%] text-slate-500">
                    {datas?.map((content,index)=>(
                        <option key={index} value={content}>
  {content}
                        </option>
                    ))}     </select>   */}

<div className='flex gap-2 mt-2'>
<span className='hover:bg-slate-100 inline-flex w-1/2 gap-2 border-[1px] border-slate-300 p-2 rounded'><DeliveryDiningIcon/> Delivery</span>
<span className='hover:bg-slate-100 inline-flex w-1/2 gap-2 border-[1px] border-slate-300 p-2 rounded'><LocalPostOfficeIcon/>Pickup</span>
    </div>
                    <div className="flex flex-col gap-2 mt-2">
                    <div className=" flex flex-col gap-2">
                     <span className='flex flex-col'>
                        <p className='mb-1 font-medium text-lg'>Full name</p>
                        <input type="text" placeholder="Enter your name" className="border-[1px] p-2 rounded"/>
                        </span>
                        
                      
                        <span className='flex flex-col'>
                        <p className='mb-1 font-medium text-lg'>Email address</p>
                        <input type="text" placeholder="Enter your name" className="border-[1px] p-2 rounded"/>
                        </span>
                        </div>

<div>
<span >
<p className='mb-1 font-medium text-lg'>Enter Phone number</p>
                            <input type='text' placeholder="Street Address" className="border-[1px] p-2 w-full rounded"/>
                        </span>

                        <span>
                                <p className='mb-1 font-medium text-lg'>Zip Code</p>
                            <input type='text' placeholder="City" className="border-[1px] p-2 rounded"/>
                            </span>
         

</div>
{/* <br/> */}
                        <div className="grid grid-cols-2 gap-1">
                            <span>
                                <p className='mb-1 font-medium text-lg'>City</p>
                            <input type='text' placeholder="City" className="border-[1px] p-1 rounded"/>
                            </span>
                            
                            <span>
                                <p className='mb-1 font-medium text-lg'>State</p>
                            <input type='text' placeholder="City" className="border-[1px] p-1 rounded"/>
                            </span>
         
                            <span>
                                <p className='mb-1 font-medium text-lg'>Zip Code</p>
                            <input type='text' placeholder="City" className="border-[1px] p-2 rounded"/>
                            </span>
         
         

                        </div>

                        {/* <span className="inline-flex gap-1">
                        <input type='text' placeholder="Email" className="border-[1px] p-1 rounded"/>
                        <input type='text' placeholder="Confirm Email" className="border-[1px] p-1 rounded"/>
                        </span> */}
<span className='mt-4'>

<input type='checkbox'/> {' '}
I have agreed to the Terms and Conditions.
</span>
                        <div>

{/* <input type='text' placeholder="Phone number (require)" className="border-[1px] p-1 rounded"/> */}
                        </div>

                        <button className="border-[1px] bg-black text-white p-2 rounded min-w-[40%] ">Proceed</button>
                    </div>

                </form>
                </section>

                <section>
<span>
    <h1>
        {/* Item() */}
    </h1>


</span>

<span>
    {/* Order total  */}
</span>
{/* <button>Confirm and pay </button> */}
                </section>
        </div>
    )
}