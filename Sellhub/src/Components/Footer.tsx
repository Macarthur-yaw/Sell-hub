


export default function Footer(){
    return (
        <div className="  flex flex-col   w-full sm:justify-around  mt-10  sm:items-start">



<span className="grid grid-cols-2 bg-black px-4 py-4 sm:grid-cols-4  w-full      gap-10 items-start">
    <ul className="list-none  flex flex-col gap-1">
        <h1 className="text-white text-[20px]">
            Products
        </h1>
        <li className="text-sm md:text-lg text-gray-300 ">
         Shoes
        </li>
        <li className=" text-gray-300 text-sm md:text-lg ">
            Apparel 
        </li>
    </ul>

    <ul className="flex flex-col gap-1">
     
    <h1 className="text-white text-[20px]">
            Featured
        </h1>
     
        <li  className=" text-gray-300  text-sm md:text-lg">
            New Arrivals
        </li>
        <li className=" text-gray-300  text-sm md:text-lg">
            Sale
        </li>
        <li className=" text-gray-300 text-sm md:text-lg ">
            Start Selling
        </li>
    </ul>
    
    <ul className=" flex-col gap-4 hidden">
    <h1 className="text-white text-[20px]">
            Collections
        </h1>
     
        <li className=" text-gray-300  text-sm md:text-lg">
            Nike
        </li>
        <li className=" text-gray-300 text-sm md:text-lg ">
            Adidas
        </li>
        <li className=" text-gray-300  text-sm md:text-lg">
            Vans
        </li>
        <li className=" text-gray-300  text-sm md:text-lg">
            AeroStart
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
            Compass
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
            Ventelo
        </li>
    </ul>

    <ul className="flex flex-col gap-1 pb-2" >
        
    <h1 className="text-white text-[20px]">
            Featured
        </h1>
        <li className=" text-gray-300 text-sm md:text-lg">
            Legal
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
Privacy 
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
            Terms and Conditions 
        </li>
        </ul>

        <ul className="flex flex-col gap-1">
        <h1 className="text-white text-[20px]">
            Featured
        </h1>
 
            <li className=" text-gray-300 text-sm md:text-lg">
                Support 
            </li>
            <li className=" text-gray-300 text-sm md:text-lg">
                Contact us 
            </li>
            <li className=" text-gray-300 text-sm md:text-lg">
                Give Feedback 
            </li>
            <li className=" text-gray-300 text-sm md:text-lg">  
                Help center
            </li>
        </ul>
</span>
<span className="text-slate-100 bg-black p-2 border-t border-slate-400 text-sm w-full text-center">
    {/* <h1 className="text-white  mb-1 font-semibold text-[20px]">
        SELLHUB
    </h1> */}
   &copy;Copyright 1995-2024 Sellhub Inc. All Rights Reserved. 
  

    
</span>

        </div>
    )
}